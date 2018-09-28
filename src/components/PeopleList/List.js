import React from 'react';
import ListItem from './ListItem';
import {Grid, Header} from 'semantic-ui-react';

const List = ({people}) => {
  return (
    <div>
      <Header textAlign="center" as="h1" content="People" />
      <Grid divided inverted stackable textAlign="center">
        <Grid.Row>
          {people.map((person, index) => {
            const frontmatter = person.node.frontmatter;
            return (
              <Grid.Column key={index} width={4} style={{marginBottom: '3em'}}>
                <ListItem
                  image={frontmatter.image}
                  name={frontmatter.name}
                  rank={frontmatter.rank}
                />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default List;
