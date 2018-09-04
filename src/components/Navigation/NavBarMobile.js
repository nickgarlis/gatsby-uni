import React from 'react'
import Link from 'gatsby-link'
import {
  Image,
  Menu,
  Sidebar
} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getActive = (currentPath, item) => currentPath === item.path
const NavBarMobile = ({
  currentPath,
  children,
  items,
  logo,
  onPusherClick,
  onToggle,
  visible
}) => (
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
          active={getActive(currentPath, item)}
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
        <Menu.Item>
          <Image size='mini' src={logo} />
        </Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default NavBarMobile
