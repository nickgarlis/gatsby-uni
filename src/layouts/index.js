import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Container, Image} from 'semantic-ui-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {siteTitle, siteDescription, siteNav, siteLogo} from '../../data/SiteConfig'
import 'semantic-ui-css/semantic.min.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import LayoutHeader from '../components/LayoutHeader'
library.add(faBars)

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

  getTitle () {
    const {currentPath} = this.state
    let title = currentPath.replace(/\//g, '')
    return title[0].toUpperCase() + title.slice(1)
  }

  render () {
    const {children} = this.props
    const {currentPath} = this.state
    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name='description' content={siteDescription} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Helmet>
        <NavBar
          currentPath={currentPath}
          items={siteNav}
          logo={siteLogo}
        >
          {(currentPath === '/')
            ? <Image
              src='http://www.landezine.com/wp-content/uploads/2011/02/4-gh3_landscape-architecture-trinity-college-park.png'
              fluid
            />
            : <LayoutHeader content={this.getTitle()} />
          }
          <Container style={{ marginTop: '7em' }}>
            {children()}
          </Container>
          <Footer logo={siteLogo} />
        </NavBar>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
