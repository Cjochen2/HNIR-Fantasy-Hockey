import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login/login";
import Draft from "./pages/Draft/draft";
import CheckoutForm from './components/Checkout';

function App () {
    return (
          
      <Router>
        <div>
          <Draft />
          <CheckoutForm />
        </div>
      </Router>
      );
  
}

export default App;
