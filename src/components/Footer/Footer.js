import React from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon
} from 'semantic-ui-react'
import {siteTitle} from '../../../data/SiteConfig'
import {colors} from '../../utils/styles'

const Footer = ({logo}) => {
  const {primary, secondary} = colors
  return (
    <Segment
      vertical
      style={{ color: primary, backgroundColor: secondary, paddingTop: '5em', paddingBottom: '3em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable textAlign='center'>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Contact {siteTitle}</List.Item>
                <List.Item as='a'>Maps & Directions</List.Item>
                <List.Item as='a'>Sitemap</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Courses' />
              <List link inverted>
                <List.Item as='a'>Bsc Courses</List.Item>
                <List.Item as='a'>Msc Courses</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Social Media' />
              <Icon circular name='facebook f' size='large' link />
              <Icon circular name='twitter' size='large' link />
              <Icon circular name='instagram' size='large' link />
              <Icon circular name='youtube' size='large' link />
              <Icon circular name='rss' size='large' link />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
