import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./login.css";

class LoginForm extends React.Component {
  state = {
    valid: false
  };
  render() {
    return (
      <Card className="outer">
        <h1>Login</h1>
        <div className="cardBody">
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
                disabled={this.props.loading}
              />
              <Form.Label className="validation">
                {this.props.errors.email}
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
                disabled={this.props.loading}
              />
              <Form.Label className="validation">
                {this.props.errors.password}
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <a href="https://localhost:44350/register">
                If you don't have an account, please click here.
              </a>
              <Button
                variant="info"
                block
                disabled={this.props.loading}
                onClick={this.props.loginUser}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Card>
    );
  }
}

export default LoginForm;
