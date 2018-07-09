import React from 'react'
import { Table } from 'semantic-ui-react'

import TableItem from './TableItem'
import TableFooter from './TableFooter'

class TableExamplePagination extends React.Component {
  constructor(props) {
    super(props)
    ;(this.state = {
      semester: 1,
      courses: [],
    }),
      (this.state.courses = this.getCourses())
    this.onClick = this.onClick.bind(this)
    // this.getCourses = this.getCourses.bind(this)
  }

  getCourses = () => {
    const courses = this.props.courses
    return courses.filter(course => {
      return course.node.frontmatter.semester === this.state.semester
    })
  }

  onClick = (e, data) => {
    e.preventDefault()
    const semester = parseInt(data.children)
    this.setState({ semester }, () => {
      const courses = this.getCourses()
      this.setState({ courses })
    })
  }

  render() {
    //let courses = this.getCourses()
    return (
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>ECTS</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.courses.map(course => {
            const frontmatter = course.node.frontmatter
            return <TableItem course={frontmatter}/>
          })}
        </Table.Body>

        <TableFooter onClick={this.onClick} />
      </Table>
    )
  }
}

export default TableExamplePagination
