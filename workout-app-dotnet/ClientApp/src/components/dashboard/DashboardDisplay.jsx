import React from "react";
import NavBar from "../navBar/NavBar";
import Dashboard from "./Dashboard";

class DashboardDisplay extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}

export default DashboardDisplay;
