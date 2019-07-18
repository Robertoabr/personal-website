import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './projectCard'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card1: false,
      card2: false,
      card3: false,
      card4: false
    }
    this.onClickFlipCard = this.onClickFlipCard.bind(this)
  }

  onClickFlipCard(id) {
    let newState = {}
    newState[id] = !this.state[id]
    this.setState(newState)
  }

  render() {
    return (
      <section id="projects">
        <div className="container-fluid d-flex flex-column align-items-center m-1">
          <div id="projectsHead">
            <h1 className=" m-8">PROJECTS</h1>
          </div>
          <Container>
            <Row>
              <Col lg={6} className="mb-4">
                <ProjectCard />
              </Col>
              <Col lg={6} className="mb-4">
                <ProjectCard />
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="projCard">
                  <Card.Img
                    className="frontImage"
                    variant="top"
                    src="images/computerVision.png"
                  />
                  <Card.Body>
                    <Card.Title>EyeTicTacToe</Card.Title>
                    <Card.Text>
                      An OpenCV.js experiment. A computer vision focused web app
                      designed to recognize the board state of a tictactoe game.
                    </Card.Text>
                    <Button variant="outline-primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="projCard">
                  <Card.Img
                    variant="top"
                    className="frontImage"
                    src="images/vr1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Ethan and the Gentle Giant</Card.Title>
                    <Card.Text>
                      Coop VR prototype Game built with Steam VR SDK and Unity.
                      Leverages VR's ability to instantly change world scale.
                    </Card.Text>
                    <Button variant="outline-primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default Projects
