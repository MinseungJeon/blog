// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import localforage from 'localforage';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';

export const en = 'en';
export const ko = 'ko';
export const supportedLocales = [en, ko];

interface CustomWindow extends Window {
  language?: string;
}

export const flattenMessages = (nestedMessages, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    const formatedMsg = messages;

    if (typeof value === 'string') {
      formatedMsg[prefixedKey] = value;
    } else {
      _.assign(formatedMsg, flattenMessages(value, prefixedKey));
    }

    return formatedMsg;
  }, {});
};

export const getClientLocale = async () => {
  let locale = ko;
  if (typeof window !== 'undefined') {
    locale = await localforage.getItem('locale');

    const w: CustomWindow & typeof globalThis = window;
    if (supportedLocales.includes(locale)) return locale;
    return w.language ? w.language : ko;
  }
  return locale;
};

export const formatHtmlMessage = message => parse(sanitizeHtml(message));
