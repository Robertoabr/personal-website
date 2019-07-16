import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Navbar, UserHome, Jumbo} from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Jumbo} />
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={UserHome} />
      </div>
    )
  }
}
