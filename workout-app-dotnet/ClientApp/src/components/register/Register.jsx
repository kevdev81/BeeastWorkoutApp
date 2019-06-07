import React from "react";
import { handlePostRegisterUser } from "./registerService";
import { Alert } from "reactstrap";
import RegisterForm from "./RegisterForm";
import history from "../../history";

class Register extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    alert: ""
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // Need to finish validation in front
  registerUser = () => {
    const formData = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    handlePostRegisterUser(formData)
      .then(this.onRegisterUserSuccess)
      .catch(this.onRegisterUserError);
  };
  onRegisterUserSuccess = () => {
    //delete log
    let alert = (
      <Alert color="info">
        You have successfully registered!
        <br />
        <br />
        <br />
        Please save your portfolio # so that you can access your portfolio.
      </Alert>
    );
    this.setState({ alert });
    console.log("User has been successfully registered.");
  };
  onRegisterUserError = () => {
    //delete log
    alert("There was an error creating your account.");
  };

  goToLoginPage = () => {
    history.push("/");
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      passwordConfirm,
      alert
    } = this.state;
    const { handleInputChange, registerUser, goToLoginPage } = this;
    return (
      <RegisterForm
        handleInputChange={handleInputChange}
        registerUser={registerUser}
        goToLoginPage={goToLoginPage}
        email={email}
        firstName={firstName}
        lastName={lastName}
        password={password}
        passwordConfirm={passwordConfirm}
        alert={alert}
      />
    );
  }
}

export default Register;
