import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const About = () => {
  return (
    <section id="about">
      <Container
        fluid
        id="aboutSection"
        className="d-flex flex-column align-items-center"
      >
        <div>
          <h1 id="aboutHeader" className="m-8">
            ABOUT
          </h1>
        </div>
        <div className="m-3">
          <Card id="rbcard" className="mb-3" style={{maxWidth: '140vmin'}}>
            <div className="row no-gutters">
              <div className="col-lg-4">
                <img
                  fluid
                  src="images/roberto2.png"
                  className="card-img"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'left'
                  }}
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h4 className="card-title">
                    <b>My Journey</b>
                  </h4>
                  <Card.Text className="text-justify">
                    I’ve always sought out challenges that are meaningful to me.
                    My professional path has shifted from analyzing consumer
                    behavior to building useful and accessible software for
                    consumers, but I've always had a laser focus on the end
                    user, and I have never stopped engaging my passion for
                    helping others and solving complex problems.
                  </Card.Text>
                  <Card.Text className="text-justify">
                    As a web developer, I enjoy using my attention to detail, my
                    need to constantly learn, and my love for making things, to
                    create the innovation that drives forward progress in the
                    world.
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default About
