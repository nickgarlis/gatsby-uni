import React from 'react';
import ListItem from './ListItem';
import {Grid} from 'semantic-ui-react';
import getAcademicTitle from '../../utils/getAcademicTitle';

const List = ({people}) => {
  return (
    <Grid divided inverted stackable textAlign="center">
      <Grid.Row>
        {people.map((person, index) => {
          const {image, name, rank} = person.node.frontmatter;
          return (
            <Grid.Column key={index} width={4} style={{marginBottom: '3em'}}>
              <ListItem
                image={image}
                name={name}
                rank={getAcademicTitle(rank)}
              />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default List;
