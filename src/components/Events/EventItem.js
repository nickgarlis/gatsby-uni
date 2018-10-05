import React from 'react';
import {Link} from 'gatsby';
import {Card, Image} from 'semantic-ui-react';
import truncateWords from '../../utils/truncateWords';

const EventItem = ({title, description, date, image}) => {
  return (
    <Card as={Link} to="/" centered>
      <Image
        label={{corner: 'left', icon: 'calendar alternate outline'}}
        src={image}
      />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{date}</span>
        </Card.Meta>
        <Card.Description textAlign="left">
          {truncateWords(description)}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EventItem;
