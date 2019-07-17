import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Projects, Jumbo, About} from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Jumbo} />
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Projects} />
      </div>
    )
  }
}
