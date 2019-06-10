import React from "react";
import NavBar from "../navBar/NavBar";
import HomePage from "./HomePage";

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
