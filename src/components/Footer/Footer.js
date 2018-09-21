import React from 'react';
import {Container, Grid, Header, List, Segment} from 'semantic-ui-react';
import SocialLink from './SocialLink';
import {siteTitle, siteSocial} from '../../../data/SiteConfig';
import {colors} from '../../utils/styles';

const Footer = () => {
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
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Contact {siteTitle}</List.Item>
                <List.Item as="a">Maps & Directions</List.Item>
                <List.Item as="a">Sitemap</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Courses" />
              <List link inverted>
                <List.Item as="a">Bsc Courses</List.Item>
                <List.Item as="a">Msc Courses</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Social Media" />
              {siteSocial.map(social => (
                <SocialLink
                  key={social.label}
                  url={social.url}
                  icon={social.icon}
                />
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
