import React from "react";
import StrengthProfile from "../strengthProfile/StrengthProfile";
import NavBar from "../navBar/NavBar";
import HomePage from "./HomePage";

const currentUserId = localStorage.getItem("currentUser");

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default Home;
