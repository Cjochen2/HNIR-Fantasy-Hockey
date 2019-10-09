import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import LoginBox from "../../components/LoginBox";
import RegisterBox from "../../components/RegisterBox";
import "./style.css";



// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false })
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false })
  }

  render() {
    return (
      <Wrapper>
        <Jumbotron>Welcome to HNIR Draft Challenge</Jumbotron>
        <div className="root-container">

          <div className="box-controller">

            <div className="controller" onClick={this.showLoginBox.bind(this)}>
              Login
                </div>

            <div className="controller" onClick={this.showRegisterBox.bind(this)}>
              Register
                </div>

          </div>

          <div className="form-container">

            {this.state.isLoginOpen && <LoginBox /> }
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>

        </div>
      </Wrapper>
    );

  }
}

export default Login;