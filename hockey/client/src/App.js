import React from "react";
import Login from "./pages/Login/login";
import Draft from "./pages/Draft/draft";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Jumbotron from "./components/Jumbotron";
import LoginBox from "./pages/LoginBox";
import RegisterBox from "./pages/RegisterBox";



function App () {
    return (
          
      <Router>
              <Jumbotron>Welcome to HNIR Draft Challenge</Jumbotron>
      
      <Switch>
     
        <Route exact path="/" component={LoginBox} />
        <Route exact path="/registration" component={RegisterBox} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/draft" component={Draft} />
        
      
      </Switch>

     
      </Router>
      );
  
}

export default App;
