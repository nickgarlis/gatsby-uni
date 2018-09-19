import React from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';
import {colors} from '../../utils/styles';

const LayoutHeader = ({location}) => {
  const pageTitle = () => {
    let title = location.pathname.replace(/\//g, '');
    return title[0].toUpperCase() + title.slice(1);
  };

  return (
    <Segment
      inverted
      textAlign="left"
      style={{
        color: colors.primary,
        backgroundColor: colors.secondary,
        minHeight: 300,
        padding: '1em 0em',
      }}
      vertical>
      <Container>
        <Header
          as="h1"
          content={pageTitle()}
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
      </Container>
    </Segment>
  );
};

export default LayoutHeader;
