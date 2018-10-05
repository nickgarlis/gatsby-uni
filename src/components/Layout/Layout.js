import React from 'react';
import {Container, Image} from 'semantic-ui-react';
import Footer from '../Footer';
import LayoutHeader from '../LayoutHeader';
import NavBar from '../NavBar';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import {siteNav, siteLogo} from '../../../data/SiteConfig';

class Layout extends React.Component {
  render() {
    const {children, location} = this.props;
    return (
      <React.Fragment>
        <TitleAndMetaTags />
        <NavBar location={location} items={siteNav} logo={siteLogo}>
          {location.pathname === '/' ? (
            <Image
              src="http://www.landezine.com/wp-content/uploads/2011/02/4-gh3_landscape-architecture-trinity-college-park.png"
              fluid
            />
          ) : (
            <LayoutHeader location={location} />
          )}
          <Container style={{marginTop: '7em', marginBottom: '5em'}}>
            {children}
          </Container>
          <Footer />
        </NavBar>
      </React.Fragment>
    );
  }
}

export default Layout;
