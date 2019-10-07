import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LoginPage(props) {
  return (
    <div class="form">
    <h1>Test</h1>
    <form action="/index" method="POST">
        <input type="text" name="user" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Log In" />
        <input type="submit" value="Sign Up" />
    </form>
</div>
  );
}

export default LoginPage;