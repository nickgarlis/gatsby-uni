import React from 'react'
import Link from 'gatsby-link'

const Courses = ({ data }) => (
  <div>
    <h1>Courses</h1>
    {data.allMarkdownRemark.edges.map(course => {
      const frontmatter = course.node.frontmatter
      return (
        <div key={course.node.id}>
          <h3>{frontmatter.title}</h3>
          <small>taught by {frontmatter.author}</small>
          <div>
            <Link to=''>Read More</Link>
          </div>
          <br />
        </div>
      )
    })}
  </div>
)

export default Courses

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`
