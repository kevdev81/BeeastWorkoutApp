import React from "react";
import { handlePostRegisterUser } from "./registerService";
import RegisterForm from "./RegisterForm";
import history from "../../history";

class Register extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    loading: false,
    errors: {}
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    const validEmail = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    const validPassword = RegExp(
      /(?=^.{8,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%^&*()])(?!.*\s).*$/
    );

    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmail.test(value) ? "" : "Email is not valid.";
        break;
      case "firstName":
        errors.firstName =
          value.length < 3 ? "Please enter your full first name." : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 2 ? "Please enter your full last name." : "";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must contain 8 characters."
            : value.length > 20
            ? "Password must be less than 20 characters."
            : !validPassword.test(value)
            ? "Password must contain an uppercase letter, lowercase letter, number, and a special character."
            : "";
        break;
      case "passwordConfirm":
        errors.passwordConfirm =
          value !== this.props.password ? "Passwords must match." : "";
        break;
      default:
        break;
    }
  };

  // Need to finish validation in front
  registerUser = () => {
    this.setState({
      loading: true
    });
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
    history.push("/");
    console.log("User has been successfully registered.");
  };
  onRegisterUserError = () => {
    //delete log
    alert("There was an error creating your account.");
    this.setState({
      loading: false
    });
  };

  goToLoginPage = () => {
    history.goBack();
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      passwordConfirm,
      loading,
      errors
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
        loading={loading}
        errors={errors}
      />
    );
  }
}

export default Register;
