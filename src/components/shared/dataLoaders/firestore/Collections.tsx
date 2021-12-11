import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, WithFirebaseProps } from 'react-redux-firebase';

// For the Example:
import urls from 'src/utils/urls';
const { landing } = urls.inner;

const Collections = () => {
  return <div className="data-loaders-firestore-collections" />;
};

type NameResolver = (
  ...args: any[]
) => ComponentType<Omit<any, string | number | symbol> & WithFirebaseProps<unknown>>;

interface CollectionsProps extends NameResolver {
  route?: string;
  children?: JSX.Element;
}

const mapStateToProps = () => ({});

const includeLandingData = [landing.path];

const enhance: any = compose<CollectionsProps>(
  firestoreConnect(({ route }: any) => {
    const collections = [];

    if (route && includeLandingData.includes(route)) {
      collections.push({
        collection: 'posts',
        storeAs: 'posts',
      });
    }

    return collections;
  }),
  connect(mapStateToProps),
);

export default enhance(Collections);
