import React from "react";
import { Card, CardBody, Button } from "reactstrap";

class RegisterForm extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <form>
            <div>
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
            <div>
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
            <div>
              <span>
                <Button
                  type="button"
                  color="info"
                  onClick={this.props.registerUser}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  color="danger"
                  onClick={this.props.goToLoginPage}
                >
                  Cancel
                </Button>
              </span>
            </div>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default RegisterForm;
