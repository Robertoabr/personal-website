import React from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em'
  },
  h2: {
    margin: '4em 0em 2em'
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em'
  },
  last: {
    marginBottom: '300px'
  }
}

const ResponsiveLayout = () => (
  <div>
    <Container>
      <Header
        as="h1"
        content="Hello I'm Roberto Brillembourg"
        style={style.h1}
        textAlign="center"
      />
      <Header
        as="h1"
        content="I'm a full-stack web developer"
        textAlign="center"
      />
    </Container>

    <Header
      as="h3"
      content="Text Container"
      style={style.h3}
      textAlign="center"
    />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header
      as="h3"
      content="Doubling Stackable Grid Container"
      style={style.h3}
      textAlign="center"
    />
    <Grid container columns={3} doubling stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header
      as="h2"
      content="Device Adjustment"
      style={style.h2}
      textAlign="center"
    />

    <Header
      as="h3"
      content="Device Column Width"
      style={style.h3}
      textAlign="center"
    />
    <Grid>
      <Grid.Column computer={3} mobile={6} tablet={9}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} mobile={6} tablet={3}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} mobile={6} tablet={3}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={3} mobile={6} tablet={9}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header
      as="h3"
      content="Device Visibility"
      style={style.h3}
      textAlign="center"
    />
    <Grid columns={4}>
      <Grid.Column only="widescreen" widescreen={10}>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column only="widescreen" widescreen={6}>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column only="large screen" largeScreen={6}>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column only="large screen" largeScreen={10}>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column only="mobile tablet" mobile={8} tablet={8}>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column only="mobile tablet" mobile={8} tablet={8}>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column only="mobile" mobile={16}>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Row only="computer" columns={2}>
        <Grid.Column>
          <Segment>Computer and Up</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Computer and Up</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column only="tablet">
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only="tablet">
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only="tablet">
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only="tablet">
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
    </Grid>

    <Header
      as="h1"
      content="Responsive Elements"
      style={style.h1}
      textAlign="center"
    />

    <Header
      as="h3"
      content="Responsive Menu"
      style={style.h3}
      textAlign="center"
    />
    <Container>
      <Menu stackable>
        <Menu.Item>Features</Menu.Item>
        <Menu.Item>Testimonials</Menu.Item>
        <Menu.Item>Sign-in</Menu.Item>
      </Menu>
    </Container>
  </div>
)

export default ResponsiveLayout
