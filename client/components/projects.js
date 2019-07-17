import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = () => {
  return (
    <div
      fluid
      id="projectsSection"
      className="d-flex flex-column align-items-center m-0"
    >
      <div id="projectsHead">
        <h1 className=" m-8">PROJECTS</h1>
      </div>
      <Container>
        <Row>
          <Col sm={6} className="mb-5">
            <Card className="projCard">
              <Card.Img variant="top" src="images/GrungeCart1.png" />
              <Card.Body>
                <Card.Title>GrungeCart</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} className="mb-5">
            <Card className="projCard">
              <Card.Img variant="top" src="images/ExplorAR.png" />
              <Card.Body>
                <Card.Title>ExplorAR</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} className="mb-5">
            <Card className="projCard" style={{width: '20rem'}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>EyeTicTacToe</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} className="mb-5">
            <Card className="projCard" style={{width: '20rem'}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>CoopVR</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
