import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card1: false,
      card2: false,
      card3: false,
      card4: false
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
          className={`card-flip ${this.state.card1 ? 'card-flip-manual' : ''}`}
        >
          <div className="front">
            <Card className="projCard">
              <Card.Img
                className="frontImage"
                variant="top"
                src="images/Guitar.jpg"
              />
              <Card.Body className="rbflipbody">
                <Card.Title>GrungeCart</Card.Title>
                <Card.Text>
                  Fully functional E-commerce web app that helps sell retro
                  music to aspiring hipsters.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => this.onClickFlipCard('card1')}
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
                src="images/grungeCart2.png"
              />
              <Card.Body className="rbflipbody">
                <Card.Text>
                  <ul>
                    <li>
                      <b>Features:</b> Stripe Integration, Auth/O-Auth,
                      Persistent Cart, Data Validations, Full Testing Suite
                    </li>
                    <li>
                      <b>Challenges:</b> Setting up database structure to allow
                      checkout and order history for both logged in and
                      anonymous users
                    </li>
                    <li>
                      <b>Technologies:</b> React, Redux, Express, Sequelize,
                      Postgresql, Mocha Chai and Enzyme
                    </li>
                  </ul>
                </Card.Text>
                <Card.Footer>
                  <Button
                    variant="outline-primary"
                    onClick={() => this.onClickFlipCard('card1')}
                  >
                    Go Back
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
