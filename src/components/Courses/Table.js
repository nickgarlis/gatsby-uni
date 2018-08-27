import React from 'react'
import { Table } from 'semantic-ui-react'
import qs from 'query-string'

import TableItem from './TableItem'
import TableFooter from './TableFooter'

class CoursesTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleSemesterClick = this.handleSemesterClick.bind(this)
    this.handlePrevNextClick = this.handlePrevNextClick.bind(this)
  }

  componentWillMount () {
    const currentSemester = this.getSemesterQuery() || 1
    const totalSemesters = this.getTotalSemesters()
    this.setState({currentSemester, totalSemesters}, () => {
      this.updateSemesterQuery(currentSemester)
    })
  }

  getSemesterQuery () {
    const {location} = this.props
    return parseInt(qs.parse(location.search).semester)
  }

  updateSemesterQuery (value) {
    this.props.history.push({
      search: `?semester=${value}`
    })
  }

  getTotalSemesters () {
    // returns the number of semesters
    let maxSemester = 0
    this.props.courses.forEach(course => {
      const semester = course.node.frontmatter.semester
      maxSemester = Math.max(maxSemester, semester)
    })
    return maxSemester
  }

  getCourses () {
    // returns all courses for the selected semester
    const {courses} = this.props
    const {currentSemester} = this.state
    return courses.filter(course => {
      return course.node.frontmatter.semester === currentSemester
    })
  }

  handleSemesterClick (e, { name }) {
    const newSemester = parseInt(name)
    this.setState({ currentSemester: newSemester }, () => {
      this.updateSemesterQuery(newSemester)
    })
  }

  handlePrevNextClick (e, { name }) {
    const { currentSemester, totalSemesters } = this.state

    let increment
    if (name === 'next') {
      increment = 1
    } else if (name === 'previous') {
      increment = -1
    } else {
      return
    }

    const newSemester = currentSemester + increment
    if (newSemester > 0 && newSemester <= totalSemesters) {
      this.setState({ currentSemester: newSemester }, () => {
        this.updateSemesterQuery(newSemester)
      })
    }
  }

  render () {
    const courses = this.getCourses()
    const {currentSemester, totalSemesters} = this.state
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
          activeItem={currentSemester}
          semesters={totalSemesters}
        />
      </Table>
    )
  }
}

export default CoursesTable
