import React from "react";
import { Button } from "reactstrap";

class LoginForm extends React.Component {

  render() {
    return (
      <div className="card">
        <h1 className="card-header">Login</h1>
        <form>
          <div className="card-body">
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
          <div>
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
          <div>
            <a href="https://localhost:44350/register"
             >
              If you don't have an account, please click here.
            </a>
          </div>
          <div>
            <span>
              <Button color="info" block onClick={this.props.loginUser}>
                Submit
              </Button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
