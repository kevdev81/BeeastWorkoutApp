import React from "react";
import Button from "react-bootstrap/Button";
import "./register.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="registerForm">
        <h1>Register</h1>
        <div className="col-md-12">
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
              <label>First Name:</label>
              <input
                className="form-control"
                placeholder="First Name"
                name="firstName"
                type="text"
                value={this.props.firstName}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={this.props.lastName}
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
              <label>Confirm Password:</label>
              <input
                className="form-control"
                placeholder="Confirm Password"
                name="passwordConfirm"
                type="password"
                value={this.props.passwordConfirm}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <Button
                type="button"
                variant="info"
                block
                onClick={this.props.registerUser}
              >
                Submit
              </Button>
            </div>
            <div className="col-md-6">
              <Button
                type="button"
                variant="secondary"
                block
                onClick={this.props.goToLoginPage}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
