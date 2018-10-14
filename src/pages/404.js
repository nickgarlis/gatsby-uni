import React from 'react';
import Layout from 'components/Layout';

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <h1>NOT FOUND</h1>
    <p>The page you are looking for does not exist...</p>
  </Layout>
);

export default NotFoundPage;
