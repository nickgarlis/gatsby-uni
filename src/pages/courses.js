import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Table from '../components/CoursesTable';

const Courses = ({data, location}) => {
  const courses = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <h1> Courses </h1>
      <Table courses={courses} location={location} />
    </Layout>
  );
};

export default Courses;

export const coursesQuery = graphql`
  query CoursesIndexQuery {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "courses"}}}
      sort: {fields: [frontmatter___semester, frontmatter___code], order: ASC}
    ) {
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
`;
