import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/login";
import Draft from "./pages/Draft/draft";



function App () {
    return (
      <Router>
        <div>
          <Draft />
        </div>
      </Router>
      );
  
}

export default App;
