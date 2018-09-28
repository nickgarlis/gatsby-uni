import React from 'react';
import {Header, Image} from 'semantic-ui-react';

const ListItem = ({image, name, rank}) => {
  return (
    <div>
      <Image as="a" href="/" src={image} size="small" circular centered />
      <Header as="h3">
        {name}
        <Header.Subheader>{rank}</Header.Subheader>
      </Header>
    </div>
  );
};

export default ListItem;
