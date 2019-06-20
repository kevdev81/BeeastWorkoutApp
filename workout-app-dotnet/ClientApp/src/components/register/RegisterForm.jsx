import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./register.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <Card className="outer">
        <h1>Register</h1>
        <Form>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              required
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              value={this.props.email}
              onChange={this.props.handleInputChange}
            />
            <Form.Label className="validation">
              {this.props.errors.email}
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              required
              className="form-control"
              placeholder="First Name"
              name="firstName"
              type="text"
              value={this.props.firstName}
              onChange={this.props.handleInputChange}
            />
            <Form.Label className="validation">
              {this.props.errors.firstName}
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              required
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              type="text"
              value={this.props.lastName}
              onChange={this.props.handleInputChange}
            />
            <Form.Label className="validation">
              {this.props.errors.lastName}
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              required
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              value={this.props.password}
              onChange={this.props.handleInputChange}
            />
            <Form.Label className="validation">
              {this.props.errors.password}
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              required
              className="form-control"
              placeholder="Confirm Password"
              name="passwordConfirm"
              type="password"
              value={this.props.passwordConfirm}
              onChange={this.props.handleInputChange}
            />
            <Form.Label className="validation">
              {this.props.errors.passwordConfirm}
            </Form.Label>
          </Form.Group>
          <div className="col-md-6">
            <Button
              type="button"
              variant="info"
              block
              onClick={this.props.registerUser}
              disabled={this.props.loading}
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
              disabled={this.props.loading}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Card>
    );
  }
}

export default RegisterForm;
