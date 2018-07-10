import React from 'react'
import { Table } from 'semantic-ui-react'

import TableItem from './TableItem'
import TableFooter from './TableFooter'

class CoursesTable extends React.Component {
  state = {
    semester: 1
  }
  
  getCourses = () => {
    //returns all courses for the selected semester
    return this.props.courses.filter(course => {
      return course.node.frontmatter.semester === this.state.semester
    })
  }

  getSemesters = () => {
    //returns the number of semesters
    let maxSemester = 0;
    this.props.courses.forEach(course => {
      const semester = course.node.frontmatter.semester
      maxSemester = Math.max(maxSemester, semester)
    })
    return maxSemester
  }
  
  handleItemClick = (e, {name}) => {
    const semester = parseInt(name)
    this.setState({ semester })
  }

  render() {
    const courses = this.getCourses()
    const semesters = this.getSemesters()
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
          {courses.map((course, index) => {
            const frontmatter = course.node.frontmatter
            return <TableItem key={index} course={frontmatter}/>
          })}
        </Table.Body>

        <TableFooter handleItemClick={this.handleItemClick} activeItem={this.state.semester} semesters={semesters}/>
      </Table>
    )
  }
}

export default CoursesTable
