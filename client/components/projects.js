import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = () => {
  return (
    <section id="projects">
      <div fluid className="d-flex flex-column align-items-center m-0">
        <div id="projectsHead">
          <h1 className=" m-8">PROJECTS</h1>
        </div>
        <Container>
          <Row>
            <Col sm={6} className="mb-5">
              <div className="card-container">
                <div className="card-flip">
                  <div className="front">
                    <Card className="projCard">
                      <Card.Img variant="top" src="images/Guitar.jpg" />
                      <Card.Body>
                        <Card.Title>GrungeCart</Card.Title>
                        <Card.Text>
                          Fully functional E-commerce web app that helps sell
                          retro music to aspiring hipsters.
                        </Card.Text>
                        <Button variant="outline-primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="back">
                    <Card className="projCard">
                      <Card.Img variant="top" src="images/Guitar.jpg" />
                      <Card.Body>
                        <Card.Title>BACK</Card.Title>
                        <Card.Text>
                          Fully functional E-commerce web app that helps sell
                          retro music to aspiring hipsters.
                        </Card.Text>
                        <Button variant="outline-primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="mb-5">
              <Card className="projCard">
                <Card.Img variant="top" src="images/ARtajmahal.jpg" />
                <Card.Body>
                  <Card.Title>ExplorAR</Card.Title>
                  <Card.Text>
                    Tourism app which brings history to life through location
                    based augmented reality
                  </Card.Text>
                  <Button variant="outline-primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-5">
              <Card className="projCard">
                <Card.Img variant="top" src="images/computerVision.png" />
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
            <Col sm={6} className="mb-5">
              <Card className="projCard">
                <Card.Img variant="top" src="images/vr1.jpg" />
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

export default Projects
