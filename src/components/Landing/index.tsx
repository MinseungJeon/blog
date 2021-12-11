import React from 'react';
import { useIntl } from 'react-intl';

// import Todo from './Todo';
// import Login from './Login';
import List from './List';

import { LandingTitle, LandingWrapper } from './styled';

const Landing = () => {
  const intl = useIntl();
  return (
    <LandingWrapper>
      <LandingTitle>JEON BLOG</LandingTitle>
      <List />
    </LandingWrapper>
  );
};

export default Landing;
