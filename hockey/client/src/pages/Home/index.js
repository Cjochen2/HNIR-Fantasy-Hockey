import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Home extends Component {


  render() {
    return (
      <Wrapper>
            <p>You made it HOME!!</p>
      </Wrapper>
    );

  }
}

export default Home;