import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Jumbo = () => {
  return (
    <Jumbotron fluid>
      <div className="intro">
        <h2>Hello, I am Roberto Brillembourg.</h2>
        <h2>I'm a full-stack web developer.</h2>
        <Button>View my work</Button>
      </div>
    </Jumbotron>
  )
}

export default Jumbo
