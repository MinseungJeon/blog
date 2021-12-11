import React from 'react';

import wordingPage from 'src/locale/about';

import Layout from 'src/components/shared/Layout';

import { FlexboxGrid, Input, Divider } from 'rsuite';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Post = () => {
  return (
    <Layout wordingPage={wordingPage}>
      <h3 style={{ textAlign: 'center' }}>글쓰기</h3>
      <Divider />

      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
      </FlexboxGrid>
    </Layout>
  );
};

export default Post;
