import React from "react";
import Login from "./Login";
import "./login.css";

class LoginDisplay extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="login">
          <Login {...this.props} />
        </div>
      </div>
    );
  }
}

export default LoginDisplay;
