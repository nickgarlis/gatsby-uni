import React from 'react'
import Link from 'gatsby-link'
import {
  Image,
  Menu,
  Sidebar
} from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NavBarMobile = ({
  children,
  items,
  location,
  logo,
  onPusherClick,
  onToggle,
  visible
}) => {
  
  const getActive = (item) => location.pathname === item.path

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        size='small'
        vertical
        visible={visible}
      >
        {items.map(item =>
          <Menu.Item
            key={item.title}
            as={Link}
            to={item.path}
            name={item.title}
            onClick={onPusherClick}
            active={getActive(item)}
            size='large'
          />
        )}
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: '100vh' }}
      >
        <Menu fixed='top'>
          <Menu.Item onClick={onToggle}>
            <FontAwesomeIcon icon='bars' size='2x' />
          </Menu.Item>
          <Menu.Item as={Link} to='/'>
            <Image size='mini' src={logo} />
          </Menu.Item>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default NavBarMobile
