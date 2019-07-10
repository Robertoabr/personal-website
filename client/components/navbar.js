import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Container, Menu} from 'semantic-ui-react'

//in line styles

const navStyle = {
  position: 'fixed',
  top: '0',
  width: '100%'
}

//component

const Navbar = () => (
  <div>
    <Container style={navStyle}>
      <Menu>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Projects</Menu.Item>
        <Menu.Item>Writing</Menu.Item>
      </Menu>
    </Container>
    <hr />
  </div>
)

/**
 * CONTAINER
 */

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
