import React from 'react'

import Link from 'gatsby-link'
import { Container, Image, Menu } from 'semantic-ui-react'

class Navigation extends React.Component {
  state = {activeItem: ''}
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  getActive = (item) => {
    return this.props.currentPath === item.path
  }

  render () {
    const {items, title} = this.props

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Link to='/' className='header item'>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            {title}
          </Link>
          <Menu.Menu position='right'>
            {items.map(item => (
              <Menu.Item
                key={item.title}
                as={Link}
                to={item.path}
                name={item.title}
                active={this.getActive(item)}
                onClick={this.handleItemClick}
              />
            ))}
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default Navigation
