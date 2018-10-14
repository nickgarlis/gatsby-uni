import React from 'react';
import Helmet from 'react-helmet';
import {siteTitle, siteDescription} from 'SiteConfig';

const TitleAndMetaTags = ({title, description}) => {
  // TODO: Use Open Graph Tags
  return (
    <Helmet>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  );
};

export default TitleAndMetaTags;
