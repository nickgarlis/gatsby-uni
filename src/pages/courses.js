import React from 'react'
import Table from '../components/CoursesTable'

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
    allMarkdownRemark (
      filter: {fields: {collection: {eq: "courses"}}},
      sort: {fields: [frontmatter___semester, frontmatter___code], order: ASC}
    ) 
    {
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
