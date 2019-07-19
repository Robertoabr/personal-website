import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class EyeTTT extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
    this.onClickFlipCard = this.onClickFlipCard.bind(this)
  }

  onClickFlipCard(id) {
    let newState = {}
    newState[id] = !this.state[id]
    this.setState(newState)
  }

  render() {
    return (
      <div className="card-container">
        <div
          className={`card-flip ${
            this.state.flipped ? 'card-flip-manual' : ''
          }`}
        >
          <div className="front">
            <Card className="projCard">
              <Card.Img
                className="frontImage"
                variant="top"
                src="images/computerVision.png"
              />
              <Card.Body className="rbflipbody">
                <Card.Title>EyeTicTacToe</Card.Title>
                <Card.Text>
                  An OpenCV.js experiment. Computer vision web app designed to
                  recognize board state of tictactoe game.
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  onClick={() => this.onClickFlipCard('flipped')}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="back">
            <Card className="projCard">
              <Card.Img
                className="backImage"
                variant="top"
                src="images/grungeCart1.png"
              />
              <Card.Body className="rbflipbody">
                <Card.Text>
                  <ul>
                    <li>
                      <b>Features:</b> Stripe Integration, Auth/O-Auth,
                      Persistent Guest Cart, Backend Data Validations, Full
                      Testing Suite
                    </li>
                    <li>
                      <b>Key Challenge:</b> Setting up database and auth token
                      to allow cart history, checkout and order history for both
                      logged in and anonymous users
                    </li>
                    <li>
                      <b>Technologies:</b> Open CV, HTML, CSS, Express,
                      Sequelize, PostgreSQL
                    </li>
                  </ul>
                </Card.Text>
                <Card.Footer className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row">
                    <Button
                      variant="outline-secondary"
                      className="githubButton"
                      href="https://github.com/white-toucan/grace-shopper"
                      target="_blank"
                    >
                      <p>Source Code</p>
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href="https://grunge-cart.herokuapp.com/Products"
                      target="_blank"
                    >
                      Site Link
                    </Button>
                  </div>
                  <Button
                    className="close mb-1 ml-3"
                    aria-label="Close"
                    variant="outline-secondary"
                    onClick={() => this.onClickFlipCard('flipped')}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
