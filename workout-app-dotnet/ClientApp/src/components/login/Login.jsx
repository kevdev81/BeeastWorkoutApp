import React from "react";
import { handleLoginUser } from "./loginService";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
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
    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    handleLoginUser(formData)
      .then(data => this.onGetSuccess(data.item))
      .catch(this.onGetError);
  };
  onGetSuccess = data => {
    console.log(data);
    localStorage.setItem("currentUser", data.id);
    if (data.hasProfile) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/strengthProfile");
    }
  };
  onGetError = () => {
    alert("Incorrect Email or Password.");
  };

  render() {
    const { email, password } = this.state;
    const { handleInputChange, loginUser } = this;
    return (
      <LoginForm
        email={email}
        password={password}
        handleInputChange={handleInputChange}
        loginUser={loginUser}
      />
    );
  }
}

export default Login;
