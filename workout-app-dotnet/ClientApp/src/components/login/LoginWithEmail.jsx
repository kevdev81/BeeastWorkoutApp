import React from "react";
import { handleLoginUser } from "./loginService";
import { Button } from "reactstrap";
import { setCurrentUser } from "../actions";
import { connect } from "react-redux";

class LoginWithEmail extends React.Component {
  state = {
    email: ""
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  loginUser = () => {
    if (this.state.email) {
      handleLoginUser(this.state.email)
        .then(data => this.onGetSuccess(data.id))
        .catch(error => this.onGetError(error));
    }
  };
  onGetSuccess = currentUserId => {
    this.props.setCurrentUser(currentUserId);
    console.log("You have successully logged in.");
  };
  onGetError = error => {
    console.log(error);
  };

  render() {
    return (
      <div className="card">
        <h1>Login</h1>
        <form>
          <div className="card-body">
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
              <a href="https://localhost:44399/register">
                If you don't have an account, please click here.
              </a>
            </div>
            <div>
              <span>
                <div>
                  <Button
                    color="info"
                    type="button"
                    block
                    onSubmit={this.loginUser}
                  >
                    Submit
                  </Button>
                </div>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: currentUserId => dispatch(setCurrentUser(currentUserId))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginWithEmail);
