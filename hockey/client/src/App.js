import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/login";



function App () {
    return (
      <Router>
        <div>
          <Login />
        </div>
      </Router>
      );
  
}

export default App;
