import React from 'react'

import Link from 'gatsby-link'
import { Container, Image, Menu } from 'semantic-ui-react'

const Navigation = ({ title, items }) => (
  <Menu fixed='top' inverted>
    <Container>
      <Link to='/' className='header item'>
        <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
        {title}
      </Link>
      <div className='right menu'>
        {items.map(item => (
          <Link to={item.path} className='item' key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    </Container>
  </Menu>
)

export default Navigation
