import React from 'react';
import {Link} from 'gatsby';
import {Icon, Image, Menu, Sidebar} from 'semantic-ui-react';

const NavBarMobile = ({
  children,
  items,
  location,
  logo,
  onPusherClick,
  onToggle,
  visible,
}) => {
  const getActive = item => location.pathname === item.path;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="push"
        direction="right"
        icon="labeled"
        size="large"
        vertical
        visible={visible}>
        {items.map(item => (
          <Menu.Item
            key={item.title}
            as={Link}
            to={item.path}
            name={item.title}
            onClick={onPusherClick}
            active={getActive(item)}
            size="large"
          />
        ))}
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{minHeight: '100vh'}}>
        <Menu attached="top" borderless>
          <Menu.Item as={Link} to="/">
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item onClick={onToggle}>
              <Icon name="bars" size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default NavBarMobile;
