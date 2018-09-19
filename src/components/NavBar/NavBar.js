import React from 'react';
import {Responsive} from 'semantic-ui-react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handlePusher = this.handlePusher.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handlePusher() {
    const {visible} = this.state;
    if (visible) {
      this.setState({visible: false});
    }
  }

  handleToggle() {
    const {visible} = this.state;
    this.setState({visible: !visible});
  }

  render() {
    const {children, items, location, logo} = this.props;
    const {visible} = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            location={location}
            items={items}
            logo={logo}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}>
            {children}
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop location={location} items={items} logo={logo} />
          {children}
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
