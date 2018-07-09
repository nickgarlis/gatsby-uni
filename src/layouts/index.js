import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import Main from '../components/Main'
import Footer from '../components/Footer'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const Layout = ({ children, data }) => {
  const meta = data.site.siteMetadata
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'A Gatsby theme meant for Universities'
          },
          { name: 'keywords', content: 'gatsby, react, tutorial' }
        ]}
        link={[
          {
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            rel: 'stylesheet'
          }
        ]}
      />
      <Navigation title={meta.title} items={meta.navItems} />
      <Main>
        {children()}
      </Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        navItems {
          title
          path
        }
      }
    }
  }
`
