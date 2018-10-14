import React from 'react';
import {Container, Image} from 'semantic-ui-react';
import Footer from 'components/Footer';
import LayoutHeader from 'components/LayoutHeader';
import NavBar from 'components/NavBar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import {siteNav, siteLogo} from 'SiteConfig';

class Layout extends React.Component {
  render() {
    const {children, location, headerImage} = this.props;
    return (
      <React.Fragment>
        <TitleAndMetaTags />
        <NavBar location={location} items={siteNav} logo={siteLogo}>
          {headerImage ? (
            <Image src={headerImage} fluid />
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
