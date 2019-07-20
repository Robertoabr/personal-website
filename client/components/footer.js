import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <section id="footer">
      <div style={{height: '15vh'}}>
        <div id="svg-container" style={{width: '100%', height: '100%'}}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{backgroundColor: 'rgba(200, 200, 200, 1)'}}
          >
            <polygon points="0,0 50,100 100,0" fill="rgba(36, 36, 36, 1)" />
          </svg>
        </div>
      </div>
      <div className="m-5">
        <Container className="d-flex flex-column align-items-center">
          <div>
            <h1 id="contact">CONTACT</h1>
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      <div id="footerLinks">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/robertobrillembourg/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/Robertoabr">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
