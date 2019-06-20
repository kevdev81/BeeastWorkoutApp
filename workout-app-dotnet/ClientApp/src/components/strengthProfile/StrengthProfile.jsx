import React from "react";
import { connect } from "react-redux";
import StrengthProfileForm from "./StrengthProfileForm";
import { handleInsertStrengthProfile } from "./strengthProfileService";

class StrengthProfile extends React.Component {
  state = {
    weight: "",
    benchMax: "",
    deadliftMax: "",
    squatMax: "",
    shoulderPressMax: "",
    loading: false
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    if (this.props.userInfo.hasProfile === true) {
      this.props.history.push("/home");
    }
  }

  submitStrengthProfile = () => {
    this.setState({
      loading: true
    });
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
    this.props.setHasProfile(true);
    this.props.history.push("/home");
  };
  onPostError = () => {
    console.log("error");
    this.setState({
      loading: false
    });
  };

  resetForm = () => {
    this.setState({
      weight: "",
      benchMax: "",
      deadliftMax: "",
      squatMax: "",
      shoulderPressMax: ""
    });
  };

  render() {
    const {
      weight,
      benchMax,
      deadliftMax,
      squatMax,
      shoulderPressMax,
      loading
    } = this.state;
    const { handleInputChange, submitStrengthProfile, resetForm } = this;
    return (
      <StrengthProfileForm
        weight={weight}
        benchMax={benchMax}
        deadliftMax={deadliftMax}
        squatMax={squatMax}
        shoulderPressMax={shoulderPressMax}
        loading={loading}
        handleInputChange={handleInputChange}
        submitStrengthProfile={submitStrengthProfile}
        resetForm={resetForm}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfoReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setHasProfile: bool => dispatch({ type: "SET_HAS_PROFILE", bool })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrengthProfile);
