import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  state = {}

  render() {
    return (
      <Navbar id="rbnav" sticky="top" bg="dark" variant="dark" expand="sm">
        <Navbar.Brand id="RB" href="#home">
          RB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#About">ABOUT</Nav.Link>
            <Nav.Link href="#Projects">PROJECTS</Nav.Link>
            <Nav.Link href="#Blog">WRITING</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
