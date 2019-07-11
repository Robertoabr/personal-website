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

    <Header as="h2" content="About" style={style.h2} textAlign="center" />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header as="h2" content="Projects" style={style.h2} textAlign="center" />
    <Grid container columns={2} doubling stackable>
      <Grid.Column>
        <Segment>GrungeCart</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>ExplorAR</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>eyeTicTacToe</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Coop VR Game Demo</Segment>
      </Grid.Column>
    </Grid>

    <Header as="h2" content="Writing" style={style.h2} textAlign="center" />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>
  </div>
)

export default ResponsiveLayout
