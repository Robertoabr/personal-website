import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, LandingPage, Navbar} from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home" component={Navbar} />
        <Route exact path="/" component={LandingPage} />
      </div>
    )
  }
}
