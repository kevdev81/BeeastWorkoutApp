import React from "react";
import Register from "./Register";
import "./register.css";

class LoginDisplay extends React.Component {
  render() {
    return (
      <div className="registerContainer">
        <div className="register">
          <Register />
        </div>
      </div>
    );
  }
}

export default LoginDisplay;
