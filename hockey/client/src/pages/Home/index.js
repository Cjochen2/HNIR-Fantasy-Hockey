/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import { Container, Row, Col } from "../../components/Grid"
import { BrowserRouter as Router, Link } from "react-router-dom";
import API from "../../utils/API";
import Standings from "../../components/Standings";
import { FormBtn } from "../../components/Form";
import "./style.css";
import UserTeams from "../../components/UserTeams";
import { Logout } from "../../components/Logout"
import Nav from "../../components/Nav"
import App from "../../App";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Home extends Component {
  state = {
    goals: [],
    assists: [],
    points: [],
    standing: [],
    userTeams: [],
    leagueTeams: []
  }

  componentDidMount() {
    API.load().then((response) => {
      if (response.data.notSignedIn) {
        this.props.history.push('/');
      } else {
        console.log("You're good.");
      }
    });

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

    API.getUserTeams().then(teams => {
      this.setState(
        { userTeams: teams.data }
      );
    });

    API.getLeagueTeams().then(teams => {
      this.setState(
        { leagueTeams: teams.data }
      )
    })
  };

  handleClick() {
    API.logout().then((response) => {
      if (response.data.signedOut) {
        this.props.history.push('/');
      };
    });
  };






  render() {
    return (
      <Wrapper >
        <div className="homeWrap" >
      <Nav onClick={this.handleClick.bind(this)}/>
      <Container>
           <Row>
          <Col size="md-6">
            <UserTeams
              title="My Teams"
              teams={this.state.userTeams} />
          </Col>
          <Col size="md-6">
            <UserTeams
              title="League Standings"
              teams={this.state.leagueTeams} />
          </Col>
        </Row>

        <Row>
          <Link to="/draft" className="m-auto"><FormBtn >Buy a New Team</FormBtn></Link>
        </Row>

        <Row className="hs" >

          <div className="homeStats col-md-4">
            <Col size="md-12">
              <Standings
                title="Goal Leaders"
                rankings="Goals"
                standings={this.state.goals}
              />
            </Col>
          </div>
          <div className="homeStats1 col-md-4">
            <Col size="md-12">
              <Standings
                title="Assist Leaders"
                rankings="Assists"
                standings={this.state.assists}
              />
            </Col>
          </div>
          <div className="homeStats2 col-md-4">
            <Col size="md-12"><Standings
              title="Points Leaders"
              rankings="Points"
              standings={this.state.points}
            /></Col>
          </div>
          {/* <Col size="md-3"><Standings
             title="HNIR League Standings"
             rankings="Total Points"
             standings={this.state.standing}
           /></Col> */}
        </Row>

      </Container>
      </div>
      </Wrapper>
    );

  }
}

export default Home;