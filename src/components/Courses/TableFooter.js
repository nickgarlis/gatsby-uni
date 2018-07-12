import React from 'react'

import { Table, Menu, Icon } from 'semantic-ui-react'

const renderMenuItems = (props) => {
  const {activeItem, semesters, handleItemClick} = props
  let items = []
  for (let i = 1; i < semesters + 1; i++) {
    items.push(
      <Menu.Item
        key={i}
        as='a'
        name={i.toString()}
        active={activeItem === i}
        onClick={handleItemClick}
      />
    )
  }
  return items
}

const TableFooter = (props) => {
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            {renderMenuItems(props)}
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  )
}

export default TableFooter
