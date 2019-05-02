import React from "react";
import { Button } from "reactstrap";
import { handlePostRegisterUser } from "./registerService";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: ""
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  registerUser = () => {
    const formData = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    handlePostRegisterUser(formData)
      .then(this.onRegisterUserSuccess)
      .catch(this.onRegisterUserError);
  };
  onRegisterUserSuccess = () => {
    console.log("User has been successfully registered.");
  };
  onRegisterUserError = () => {
    console.log("There was an error with your request.");
  };

  goToLoginPage = () => {
    this.props.history.push("");
  };

  render() {
    return (
      <div className="card">
        <form>
          <div>
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
            <label>Confirm Password:</label>
            <input
              className="form-control"
              placeholder="Confirm Password"
              name="passwordConfirm"
              type="password"
              value={this.state.passwordConfirm}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <span>
              <Button type="button" color="info" onClick={this.registerUser}>
                Submit
              </Button>
              <Button type="button" color="danger" onClick={this.goToLoginPage}>
                Cancel
              </Button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
