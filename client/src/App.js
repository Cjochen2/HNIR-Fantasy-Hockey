import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Jumbotron from "./components/Jumbotron";
import Draft from "./pages/Draft"
import LoginBox from "./pages/LoginBox";
import RegisterBox from "./pages/RegisterBox";
import MyTeam from "./pages/MyTeam"



function App () {
    return (
          
      <Router>
              <Jumbotron>HNIR Draft Challenge</Jumbotron>
      
      <Switch>
     
        <Route exact path="/" component={LoginBox} />
        <Route exact path="/registration" component={RegisterBox} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/home/myteam" component={MyTeam} /> */}
        <Route exact path="/draft" component={Draft} />
        
      
      </Switch>

     
      </Router>
      );
  
}

export default App;
