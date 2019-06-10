import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import UserDisplay from "./UserDisplay";
import { getStrengthProfileByUserId } from "./homeService";
import "./homePage.css";

class HomePage extends React.Component {
  state = {
    firstName: "Kevin",
    lastName: "Kim",
    email: "kevinkim.2012@gmail.com",
    benchMax: null,
    deadliftMax: null,
    squatMax: null,
    shoulderPressMax: null
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

export default HomePage;
