import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import config from '../../data/SiteConfig'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

class Layout extends React.Component {
  state = {
    currentPath: this.props.location.pathname
  }

  componentDidUpdate (prevProps) {
    const { pathname } = this.props.location
    const prevPath = prevProps.location.pathname
    if (pathname !== prevPath) {
      this.setState({ currentPath: pathname })
    }
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Helmet>
        <Navigation
          title={config.siteTitle}
          items={config.siteNav}
          currentPath={this.state.currentPath}
        />
        <Header />
        <Main>{children()}</Main>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
