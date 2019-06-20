import React from "react";
import { handleLoginUser } from "./loginService";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
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
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmail.test(value) ? "" : "Email is not valid.";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must contain 8 characters." : "";
        break;
      default:
        break;
    }
  };

  loginUser = () => {
    this.setState({
      loading: true
    });
    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    handleLoginUser(formData)
      .then(data => this.onGetSuccess(data.item))
      .catch(this.onGetError);
  };
  onGetSuccess = data => {
    localStorage.setItem("currentUser", data.id);
    this.props.setUserInfo(data);
    if (data.hasProfile) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/strengthProfile");
    }
  };
  onGetError = () => {
    alert("Incorrect Email or Password.");
    this.setState({
      loading: false
    });
  };

  render() {
    const { email, password, loading, errors } = this.state;
    const { handleInputChange, loginUser } = this;
    return (
      <LoginForm
        email={email}
        password={password}
        loading={loading}
        errors={errors}
        handleInputChange={handleInputChange}
        loginUser={loginUser}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: userInfo => dispatch({ type: "SET_USER_INFO", userInfo })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
