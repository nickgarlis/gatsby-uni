import React from 'react';
import {Header, Grid} from 'semantic-ui-react';
import EventItem from './EventItem';

const Events = ({events}) => {
  return (
    <Grid
      divided
      inverted
      stackable
      textAlign="center"
      style={{marginTop: '5em', marginBottom: '5em'}}>
      <Header as="h1" content="Events" />
      <Grid.Row>
        {events.map((event, index) => {
          const frontmatter = event.node.frontmatter;
          return (
            <Grid.Column key={index} width={4}>
              <EventItem
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
                date={frontmatter.date}
              />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default Events;
