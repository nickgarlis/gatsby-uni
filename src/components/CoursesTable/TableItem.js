import React from 'react';
import {Link} from 'gatsby';
import {Table, Header} from 'semantic-ui-react';
import truncateWords from 'utils/truncateWords';

const TableItem = ({course}) => (
  <Table.Row>
    <Table.Cell>{course.code}</Table.Cell>
    <Table.Cell>
      <Header as="h4" textAlign="center">
        <Link to="/">{course.title}</Link>
      </Header>
    </Table.Cell>
    <Table.Cell>
      <Header as="h3" textAlign="center">
        {course.ects}
      </Header>
    </Table.Cell>
    <Table.Cell>{course.type}</Table.Cell>
    <Table.Cell>{truncateWords(course.excerpt, 20)}</Table.Cell>
  </Table.Row>
);

export default TableItem;
