import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GrungeCart from './grungeCart'
import ExplorAR from './explorAR'
import EyeTTT from './eyeTTT'

class Projects extends Component {
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
                <ExplorAR />
              </Col>
              <Col lg={6} className="mb-4">
                <GrungeCart />
              </Col>
              <Col lg={6} className="mb-4">
                <EyeTTT />
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
