import React from 'react'
import { Table } from 'semantic-ui-react'
import qs from 'query-string'
import DropdownSemesters from './DropdownSemesters'
import TableItem from './TableItem'

class CoursesTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleSemesterClick = this.handleSemesterClick.bind(this)
  }

  componentWillMount () {
    const selectedSemester = this.getSemesterQuery()
    const totalSemesters = this.getTotalSemesters()

    this.setState({selectedSemester, totalSemesters}, () => {
      if (selectedSemester) {
        this.updateSemesterQuery(selectedSemester)
      }
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
    const {courses} = this.props
    const {selectedSemester} = this.state

    if (!selectedSemester || selectedSemester === 'all') {
      return courses
    }

    // returns all courses for the selected semester
    return courses.filter(course => {
      return course.node.frontmatter.semester === selectedSemester
    })
  }

  handleSemesterClick (e, {value}) {
    this.setState({selectedSemester: value}, () => {
      this.updateSemesterQuery(value)
    })
  }

  randomColor () {
    const colors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  render () {
    const courses = this.getCourses()
    const {totalSemesters, selectedSemester} = this.state

    return (
      <div>
        <DropdownSemesters
          totalSemesters={totalSemesters}
          selectedSemester={selectedSemester}
          handleSemesterClick={this.handleSemesterClick}
        />

        <Table celled padded selectable color={this.randomColor()}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Code</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>ECTS</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {courses.map((course, index) => {
              const frontmatter = course.node.frontmatter
              return <TableItem key={index} course={frontmatter} />
            })}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default CoursesTable
