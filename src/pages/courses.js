import React from 'react'

import Table from '../components/Courses/Table'

const Courses = ({ data, history, location }) => {
  const courses = data.allMarkdownRemark.edges
  return (
    <div>
      <h1> Courses </h1>
      <Table courses={courses} location={location} history={history} />
    </div>
  )
}

export default Courses

export const coursesQuery = graphql`
  query CoursesIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            author
            excerpt
            type
            ects
            semester
            code
          }
        }
      }
    }
  }
`
