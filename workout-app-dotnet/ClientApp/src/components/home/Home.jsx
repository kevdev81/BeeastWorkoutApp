import React from "react";
import HomePage from "./HomePage";
import StrengthProfile from "../strengthProfile/StrengthProfile";
import { getUserById } from "./homeService";

const currentUserId = localStorage.getItem("currentUser");

class Home extends React.Component {
  state = {
    hasProfile: true
  };

  // componentDidMount() {
  //   getUserById(currentUserId)
  //     .then(this.onGetUserSuccess)
  //     .catch(this.onGetUserError);
  // }
  // onGetUserSuccess = hasProfile => {

  // }

  // // render() {
  // // let homePage;
  // // if (this.state.hasProfile) {
  // //   homePage = <HomePage />;
  // // } else {
  // //   homePage = <StrengthProfile />;
  // // }
  // renderSwitch(param) {
  //   switch (param) {
  //     case true:
  //       return <HomePage />;
  //     case false:
  //       return <StrengthProfile />;
  //   }
  // }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {/* {homePage} */}
        {/* {this.renderSwitch(this.state.hasProfile)} */}
      </div>
    );
  }
}

export default Home;
