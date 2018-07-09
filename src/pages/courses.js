import React from 'react'

import Table from '../components/Courses/Table'

const Courses = ({ data }) => {
  const courses = data.allMarkdownRemark.edges
  console.log(courses)
  return (
    <div>
      <h1> Courses </h1>
      <Table courses={courses} />
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
