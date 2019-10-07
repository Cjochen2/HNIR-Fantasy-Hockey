import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";



function App () {
    return (
      <Router>
        <div>
          <LoginPage />
        </div>
      </Router>
      );
  
}

export default App;
