import React from 'react';
import {Container, Grid, Segment} from 'semantic-ui-react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import {footerLinks, siteSocial} from '../../../data/SiteConfig';
import {colors} from '../../utils/styles';

const Footer = () => {
  const {left, right} = footerLinks;
  const {primary, secondary} = colors;
  return (
    <Segment
      vertical
      style={{
        color: primary,
        backgroundColor: secondary,
        paddingTop: '5em',
        paddingBottom: '3em',
      }}>
      <Container textAlign="center">
        <Grid divided inverted stackable textAlign="center">
          <Grid.Row>
            <Grid.Column width={4}>
              <FooterLinks title={left.title} items={left.items} />
            </Grid.Column>
            <Grid.Column width={4}>
              <FooterLinks title={right.title} items={right.items} />
            </Grid.Column>
            <Grid.Column width={7}>
              <FooterSocial title={'Social Media'} items={siteSocial} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
