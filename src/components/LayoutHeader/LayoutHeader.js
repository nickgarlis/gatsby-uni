import React from 'react'
import {Container, Header, Segment} from 'semantic-ui-react'
import {colors} from '../../utils/styles'

const LayoutHeader = ({content}) => {
  return (
    <Segment
      inverted
      textAlign='left'
      style={{
        color: colors.primary,
        backgroundColor: colors.secondary,
        minHeight: 300,
        padding: '1em 0em'
      }}
      vertical
    >
      <Container>
        <Header
          as='h1'
          content={content}
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em'
          }}
        />
      </Container>
    </Segment>
  )
}

export default LayoutHeader
