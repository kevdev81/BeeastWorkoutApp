import React from "react";
import StrengthProfileForm from "./StrengthProfileForm";
import { handleInsertStrengthProfile } from "./strengthProfileService";

class StrengthProfile extends React.Component {
  state = {
    weight: 0,
    benchMax: 0,
    deadliftMax: 0,
    squatMax: 0,
    shoulderPressMax: 0
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  submitStrengthProfile = () => {
    const formData = {
      userId: localStorage.getItem("currentUser"),
      weight: this.state.weight,
      benchMax: this.state.benchMax,
      deadliftMax: this.state.deadliftMax,
      squatMax: this.state.squatMax,
      shoulderPressMax: this.state.shoulderPressMax
    };
    handleInsertStrengthProfile(formData)
      .then(data => this.onPostSuccess(data))
      .catch(this.onPostError);
  };
  onPostSuccess = data => {
    console.log(data);
  };
  onPostError = () => {
    console.log("error");
  };

  render() {
    const {
      weight,
      benchMax,
      deadliftMax,
      squatMax,
      shoulderPressMax
    } = this.state;
    const { handleInputChange, submitStrengthProfile } = this;
    return (
      <StrengthProfileForm
        weight={weight}
        benchMax={benchMax}
        deadliftMax={deadliftMax}
        squatMax={squatMax}
        shoulderPressMax={shoulderPressMax}
        handleInputChange={handleInputChange}
        submitStrengthProfile={submitStrengthProfile}
      />
    );
  }
}

export default StrengthProfile;
