import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import UserDisplay from "./UserDisplay";
import { getStrengthProfileByUserId } from "./homeService";
import { setStrengthProfile } from "../actions";
import { connect } from "react-redux";
import "./homePage.css";

class HomePage extends React.Component {
  state = {
    // firstName: "Kevin",
    // lastName: "Kim",
    // email: "kevinkim.2012@gmail.com",
    // benchMax: null,
    // deadliftMax: null,
    // squatMax: null,
    // shoulderPressMax: null
    benchMax: 135,
    deadliftMax: 135,
    squatMax: 135,
    shoulderPressMax: 135
  };

  componentDidMount() {
    getStrengthProfileByUserId(localStorage.getItem("currentUser"))
      .then(data => this.onGetSuccess(data.data.item))
      .catch(this.onGetError);
  }
  onGetSuccess = data => {
    this.setState({
      benchMax: data.benchMax,
      deadliftMax: data.deadliftMax,
      squatMax: data.squatMax,
      shoulderPressMax: data.shoulderPressMax
    });
  };

  tryRedux = () => {
    this.props.setStrengthProfile(this.state);
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      benchMax,
      deadliftMax,
      squatMax,
      shoulderPressMax
    } = this.state;
    return (
      <div className="homePageWrapper">
        <div className="homePageContainer">
          <div className="userDisplay">
            <button onClick={this.tryRedux}>redux</button>
            <UserDisplay
              firstName={firstName}
              lastName={lastName}
              email={email}
            />
          </div>
          <div className="profileDisplay">
            <ProfileDisplay
              benchMax={benchMax}
              deadliftMax={deadliftMax}
              squatMax={squatMax}
              shoulderPressMax={shoulderPressMax}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    benchMax: state.benchMax,
    deadliftMax: state.deadliftMax,
    squatMax: state.squatMax,
    shoulderPressMax: state.shoulderPressMax
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setStrengthProfile: strengthProfile =>
      dispatch({ type: "SET_STRENGTH_PROFILE", strengthProfile })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
