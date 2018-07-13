import React from 'react'
import { Table } from 'semantic-ui-react'

import TableItem from './TableItem'
import TableFooter from './TableFooter'

class CoursesTable extends React.Component {
  state = {
    semester: 1
  }

  componentWillMount () {
    const semesters = this.getSemesters()
    this.setState({ semesters })
  }

  getCourses = () => {
    // returns all courses for the selected semester
    return this.props.courses.filter(course => {
      return course.node.frontmatter.semester === this.state.semester
    })
  }

  getSemesters = () => {
    // returns the number of semesters
    let maxSemester = 0
    this.props.courses.forEach(course => {
      const semester = course.node.frontmatter.semester
      maxSemester = Math.max(maxSemester, semester)
    })
    return maxSemester
  }

  handleSemesterClick = (e, { name }) => {
    const semester = parseInt(name)
    this.setState({ semester })
  }

  handlePrevNextClick = (e, { name }) => {
    let increment
    if (name === 'next') {
      increment = 1
    } else if (name === 'previous') {
      increment = -1
    } else {
      return
    }
    const semester = this.state.semester + increment
    if (semester > 0 && semester <= this.state.semesters) {
      this.setState({ semester })
    }
  }

  render () {
    const courses = this.getCourses()
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
            return <TableItem key={index} course={frontmatter} />
          })}
        </Table.Body>

        <TableFooter
          handleSemesterClick={this.handleSemesterClick}
          handlePrevNextClick={this.handlePrevNextClick}
          activeItem={this.state.semester}
          semesters={this.state.semesters}
        />
      </Table>
    )
  }
}

export default CoursesTable
