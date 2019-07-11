import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Container, Menu} from 'semantic-ui-react'

//in line styles
const navStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '9999',
  display: 'flex',
  justifyContent: 'center'
}

//component

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Container style={navStyle}>
        <Menu>
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="About"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>

          <Menu.Item
            name="Projects"
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            name="Writing"
            active={activeItem === 'Writing'}
            onClick={this.handleItemClick}
          >
            Writing
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
