import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Title from "./components/Title";


function App () {
    return (
      <Router>
        <div>
          <Title />
          <LoginPage />
        </div>
      </Router>
      );
  
}

export default App;
