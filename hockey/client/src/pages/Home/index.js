import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Grid, { Container, Row, Col } from "../../components/Grid"
import API from "../../utils/API";
import "./style.css";
import Standings from "../../components/Standings";
import { FormBtn } from "../../components/Form";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Home extends Component {
  state = {
    goals: [],
    assists: [],
    points: [],
  }

  componentDidMount() {
    // API.load().then((response) => {
    //   if (response.data.notSignedIn) {
    //     this.props.history.push('/');
    //   } else {
    //     console.log("You're good.");
    //   }
    // });

    API.getGoals().then(goals => {
      this.setState(
        { goals: goals.data }
      )
    });

    API.getAssists().then(assists => {
      this.setState(
        { assists: assists.data }
      )
    });

    API.getPoints().then(points => {
      this.setState(
        { points: points.data }
      )
    });
  }

  render() {
    return (
      <Container>

        <Row >
          <Col size="md-3">
            <Standings
              title="Goal Leaders"
              rankings="Goals"
              standings={this.state.goals}
            />
          </Col>
          <Col size="md-3">
            <Standings
              title="Assist Leaders"
              rankings="Assists"
              standings={this.state.assists}
            />
          </Col>
          <Col size="md-3"><Standings
              title="Points Leaders"
              rankings="Points"
              standings={this.state.points}
            /></Col>
          <Col size="md-3">HNIR League Standings</Col>
        </Row>
        <Row>
          <Col size="md-6">
          this is where User teams go
          </Col>
          <Col size="md-6">
          this is where Fantasy Standings go
          </Col>
        </Row>
        <Row><FormBtn>Buy a New Team</FormBtn></Row>
      </Container>
    );

  }
}

export default Home;