import React from 'react'

import Link from 'gatsby-link'

import { Table, Divider } from 'semantic-ui-react'

// const typeDistinction=()=>{

// }
const TableItem = ({ course }) => (
  <Table.Row>
    <Table.Cell>
      <Link to='/'>{course.title}</Link>
    </Table.Cell>
    <Table.Cell>{course.ects}</Table.Cell>
    <Table.Cell>{course.type}</Table.Cell>
  </Table.Row>
)

export default TableItem
