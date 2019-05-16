import React from "react";
import Button from "react-bootstrap/Button";
import "./login.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="card">
        <h1>Login</h1>
        <div className="cardBody">
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                value={this.props.email}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                className="form-control"
                placeholder="Password"
                name="password"
                type="password"
                value={this.props.password}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <a href="https://localhost:44350/register">
                If you don't have an account, please click here.
              </a>
              <div>
                <span>
                  <Button variant="info" block onClick={this.props.loginUser}>
                    Submit
                  </Button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
