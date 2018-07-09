import React from 'react'

import { Container } from 'semantic-ui-react'

const Main = props => {
  return (
    <Container text style={{ marginTop: '7em' }}>
      {props.children}
    </Container>
  )
}

export default Main
