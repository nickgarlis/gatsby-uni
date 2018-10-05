import React from 'react';
import {Link} from 'gatsby';
import {Header, List} from 'semantic-ui-react';

const FooterLinks = ({title, items}) => {
  return (
    <div>
      <Header inverted as="h4" content={title} />
      <List link inverted>
        {items.map(item => (
          <List.Item key={item.name} as={Link} to={item.path}>
            {item.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default FooterLinks;
