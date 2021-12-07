import React from 'react';
import { useIntl } from 'react-intl';

import Todo from './Todo';

import { LandingTitle, LandingWrapper } from './styled';

const Landing = () => {
  const intl = useIntl();
  return (
    <LandingWrapper>
      <LandingTitle>JEON BLOG</LandingTitle>
      <Todo />
    </LandingWrapper>
  );
};

export default Landing;
