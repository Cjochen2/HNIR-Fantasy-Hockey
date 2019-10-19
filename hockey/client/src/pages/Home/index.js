/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Grid, { Container, Row, Col } from "../../components/Grid"
import API from "../../utils/API";
import "./style.css";
import Standings from "../../components/Standings";
import { FormBtn } from "../../components/Form";
import axios from "axios";
import cheerio from "cheerio";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Home extends Component {
  state = {
    goals: [],
    assists: [],
    points: [],
    standing: []
  }

  componentDidMount() {
    // API.load().then((response) => {
    //   if (response.data.notSignedIn) {
    //     this.props.history.push('/');
    //   } else {
    //     console.log("You're good.");
    //   }
    // });
    // this.scrape();
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

  // scrape() {

  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   let standings = []
  //   axios.get(proxyurl + "https://www.hnir.net/standings/show/5240533?subseason=634286")
  //     .then(function (response) {

  //       var $ = cheerio.load(response.data);

  //       $(".statTable").children('tbody').children('tr').each(function (i, element) {

  //         let team = $(element).children("td").children(".teamName").eq(0).text().trim();

  //         let points = $(element).children().eq(2).text().trim();

  //          standings.push({
  //            team: team,
  //            points: points
  //          })
  //       });
  //       console.log(standings);

  //     });

  // }


  render() {
    return (
      <Container>

        <Row className="hs" >
          
            <div className="homeStats">
              <Col size="md-3">
                <Standings
                  title="Goal Leaders"
                  rankings="Goals"
                  standings={this.state.goals}
                />
              </Col>
            </div>
            <div className="homeStats1">
              <Col size="md-3">
                <Standings
                  title="Assist Leaders"
                  rankings="Assists"
                  standings={this.state.assists}
                />
              </Col>
            </div>
            <div className="homeStats2">
              <Col size="md-3"><Standings
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