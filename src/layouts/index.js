import React from 'react'
import PropTypes from 'prop-types'
import {Container, Image} from 'semantic-ui-react'
import Footer from '../components/Footer'
import LayoutHeader from '../components/LayoutHeader'
import NavBar from '../components/NavBar'
import TitleAndMetaTags from '../components/TitleAndMetaTags'
import {siteNav, siteLogo} from '../../data/SiteConfig'
import 'semantic-ui-css/semantic.min.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
library.add(faBars)

class Layout extends React.Component {
  render () {
    const {children, location} = this.props
    return (
      <div>
        <TitleAndMetaTags />
        <NavBar
          location={location}
          items={siteNav}
          logo={siteLogo}
        >
          {
            (location.pathname === '/')
              ? <Image
                src='http://www.landezine.com/wp-content/uploads/2011/02/4-gh3_landscape-architecture-trinity-college-park.png'
                fluid
              />
              : <LayoutHeader location={location} />
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
