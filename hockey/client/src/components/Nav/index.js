import React from "react";


function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/home">
        Home
      </a>
      <a className="navbar-brand" href="/home/myteam">
        My Teams
      </a>
      <a className="navbar-brand" href="/draft">
        Draft
      </a>
      <a className="navbar-brand" {...props} href="">
        Logout
      </a>

    </nav>
  );
}

export default Nav;