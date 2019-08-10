import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import UserDisplay from "./UserDisplay";
import { getStrengthProfileByUserId } from "./dashboardService";
import { connect } from "react-redux";
import "./dashboard.css";

class Dashboard extends React.Component {
  // componentDidMount() {
  //   getStrengthProfileByUserId(localStorage.getItem("currentUser"))
  //     .then(data => this.onGetSuccess(data.data.item))
  //     .catch(this.onGetError);
  // }
  // onGetSuccess = data => {
  //   this.props.setStrengthProfile(data);
  // };
  componentDidMount() {
    getStrengthProfileByUserId(localStorage.getItem("currentUser"))
      .then(data => this.onGetSuccess(data.data.item))
      .catch(this.onGetError);
  }
  onGetSuccess = data => {
    this.props.setStrengthProfile(data);
  };

  render() {
    const { firstName, lastName, email } = this.props.userInfo;
    const {
      benchMax,
      deadliftMax,
      squatMax,
      shoulderPressMax
    } = this.props.strengthProfile;
    return (
      <div className="dashboardContainer">
        <div className="userContainer">
          <UserDisplay
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
        </div>
        <div className="profileContainer">
          <ProfileDisplay
            benchMax={benchMax}
            deadliftMax={deadliftMax}
            squatMax={squatMax}
            shoulderPressMax={shoulderPressMax}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfoReducer,
    strengthProfile: state.strengthProfileReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStrengthProfile: strengthProfile =>
      dispatch({ type: "SET_STRENGTH_PROFILE", strengthProfile })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
