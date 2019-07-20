import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Navbar, Projects, Jumbo, About, Footer} from './components'

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
        <Route exact path="/" component={Footer} />
      </div>
    )
  }
}
