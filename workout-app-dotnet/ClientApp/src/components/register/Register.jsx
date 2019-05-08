import React from "react";
// import { Button } from "reactstrap";
// import { handleRegisterUser } from "./registerService";

class Register extends React.Component {
  state = {
    email: "",
    benchMax: 0,
    deadliftMax: 0,
    squatMax: 0,
    shoulderPressMax: 0,
    benchGoal: 0,
    deadliftGoal: 0,
    squatGoal: 0,
    shoulderPressGoal: 0,
    otherGoals: ""
  };

  render() {
    return (
      <div>
        <h1>Use Step Wizard</h1>
      </div>
    );
  }
}

export default Register;
