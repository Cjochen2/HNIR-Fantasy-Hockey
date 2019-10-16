import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Grid, {Container, Row, Col}from "../../components/Grid"
import API from "../../utils/API";
import "./style.css";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Home extends Component {


    // componentDidMount() {
    //     API.load().then((response) => {
    //         if(response.data.notSignedIn) {
    //             this.props.history.push('/');
    //         } else {
    //             console.log("You're good.");
    //         }
    //     })
    // }

  render() {
    return (
      <Container>

          <Row >
           <Col size="md-4">test 1</Col>
           <Col size="md-4">test 2</Col>
           <Col size="md-4">test 3</Col>
          </Row>
      </Container>
    );

  }
}

export default Home;