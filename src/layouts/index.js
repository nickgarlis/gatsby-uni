import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Container, Header, Image, Segment} from 'semantic-ui-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {siteTitle, siteDescription, siteNav, siteLogo} from '../../data/SiteConfig'
import {colors} from '../utils/styles'
import 'semantic-ui-css/semantic.min.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
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
    const {primary, secondary} = colors
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
            : <Segment
              inverted
              textAlign='left'
              style={{ color: primary, backgroundColor: secondary, minHeight: 300, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Header
                  as='h1'
                  content={this.getTitle()}
                  inverted
                  style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em'
                  }}
                />
              </Container>
            </Segment>
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
