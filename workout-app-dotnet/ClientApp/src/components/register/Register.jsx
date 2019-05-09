import React from "react";
import { handlePostRegisterUser } from "./registerService";
import RegisterForm from "./RegisterForm";
import history from "../../history";

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

  // Need to finish validation in front
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
    //delete log
    console.log("User has been successfully registered.");
  };
  onRegisterUserError = () => {
    //delete log
    console.log("There was an error with your request.");
  };

  goToLoginPage = () => {
    history.replace("/");
  };
  render() {
    const { email, password, passwordConfirm } = this.state;
    const { handleInputChange, registerUser, goToLoginPage } = this;
    return (
      <div>
        <RegisterForm
          handleInputChange={handleInputChange}
          registerUser={registerUser}
          goToLoginPage={goToLoginPage}
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
        />
      </div>
    );
  }
}

export default Register;
