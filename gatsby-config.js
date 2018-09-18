const config = require('./data/SiteConfig')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription
    }
  },
  plugins: [
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/${config.coursesDir}`,
        name: 'courses'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/${config.peopleDir}`,
        name: 'people'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix
      }
    },
    'gatsby-plugin-offline'
  ]
}
