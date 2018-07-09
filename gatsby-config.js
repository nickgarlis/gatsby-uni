module.exports = {
  siteMetadata: {
    title: 'Ionian University',
    navItems: [
      {
        title: 'Courses',
        path: '/courses'
      },
      {
        title: 'People',
        path: '#'
      },
      {
        title: 'Laboratories',
        path: '#'
      },
      {
        title: 'News',
        path: '#'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/courses`,
        name: 'courses'
      }
    },
    'gatsby-transformer-remark'
  ]
}
