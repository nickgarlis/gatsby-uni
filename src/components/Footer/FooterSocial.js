import React from 'react';
import {Header} from 'semantic-ui-react';
import SocialIcon from './SocialIcon';

const FooterSocial = ({title, items}) => {
  return (
    <div>
      <Header inverted as="h4" content={title} />
      {items.map(item => (
        <SocialIcon key={item.label} url={item.url} icon={item.icon} />
      ))}
    </div>
  );
};

export default FooterSocial;
