import React from 'react'

import { Table, Menu, Icon } from 'semantic-ui-react'

const TableFooter = props => {
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            {['1', '2', '3', '4', '5', '6', '7', '8'].map(item => (
              <Menu.Item as='a' onClick={props.onClick} key={item}>
                {item}
              </Menu.Item>
            ))}
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
