import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/Navigation/NavBar'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import config from '../../data/SiteConfig'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPath: props.location.pathname
    }
  }

  componentDidUpdate (prevProps) {
    const {pathname} = this.props.location
    const prevPath = prevProps.location.pathname
    if (pathname !== prevPath) {
      this.setState({ currentPath: pathname })
    }
  }

  render () {
    const {children} = this.props
    const {currentPath} = this.state
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
        <NavBar
          currentPath={currentPath}
          items={config.siteNav}
          logo={config.siteLogo}
        >
          <Header />
        </NavBar>
        <Main>
          {children()}
        </Main>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
