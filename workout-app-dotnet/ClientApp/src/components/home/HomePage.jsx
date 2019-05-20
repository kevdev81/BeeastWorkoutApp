import React from "react";
import Card from "react-bootstrap/Card";
import ProfileDisplay from "./ProfileDisplay";
import UserDisplay from "./UserDisplay";
import "./homePage.css";

class HomePage extends React.Component {
  state = {
    firstName: "Kevin",
    lastName: "Kim",
    email: "kevinkim.2012@gmail.com",
    benchMax: 125,
    deadliftMax: 125,
    squatMax: 125,
    shoulderPressMax: 125
  };

  //   componentDidMount() {
  //     getUserById(localStorage.getItem("currentUser"))
  //       .then(data => this.onGetSuccess(data.items))
  //       .catch(this.onGetError);
  //   }
  //   onGetSuccess = data => {
  //     this.setState({
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       benchMax: data.benchMax,
  //       deadliftMax: data.deadliftMax,
  //       squatMax: data.squatMax,
  //       shoulderPressMax: data.shoulderPressMax
  //     });
  //   };

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
