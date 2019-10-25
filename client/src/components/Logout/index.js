import React from "react";

export function Logout(props) {
    return (
      <button {...props} className="btn">
        {props.children}
      </button>
    );
  }