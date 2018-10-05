import React from 'react';
import {Link} from 'gatsby';
import {Container, Image, Menu} from 'semantic-ui-react';

class NavBarDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: ''};
  }

  getActive(item) {
    const {location} = this.props;
    return location.pathname === item.path;
  }

  render() {
    const {items, logo} = this.props;
    return (
      <Menu attached="top" borderless>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Image size="mini" src={logo} style={{marginRight: '1.5em'}} />
            Gatsby Uni
          </Menu.Item>

          {items.map(item => (
            <Menu.Item
              key={item.title}
              as={Link}
              to={item.path}
              name={item.title}
              active={this.getActive(item)}
            />
          ))}
        </Container>
      </Menu>
    );
  }
}

export default NavBarDesktop;
