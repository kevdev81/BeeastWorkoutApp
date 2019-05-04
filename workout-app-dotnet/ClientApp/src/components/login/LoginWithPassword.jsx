import React from "react";
import { Button } from "reactstrap";

class LoginWithPassword extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

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
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <a href="https://localhost:44399/register">
              If you don't have a registered account, please click here.
            </a>
          </div>
          <div>
            <span>
              <Button type="button" color="info" onClick={this.loginUser}>
                Submit
              </Button>
              <Button type="button" color="danger">
                Cancel
              </Button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginWithPassword;
