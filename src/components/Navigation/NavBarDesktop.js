import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Image,
  Menu
} from 'semantic-ui-react'

class NavBarDesktop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {activeItem: ''}
  }

  getActive (item) {
    const {currentPath} = this.props
    return currentPath === item.path
  }

  render () {
    const {items, logo} = this.props
    return (
      <Menu fixed='top'>
        <Container>
          <Menu.Item>
            <Image size='mini' src={logo} />
          </Menu.Item>

          {items.map(item =>
            <Menu.Item
              key={item.title}
              as={Link}
              to={item.path}
              name={item.title}
              active={this.getActive(item)}
            />
          )}
        </Container>
      </Menu>
    )
  }
}

export default NavBarDesktop
