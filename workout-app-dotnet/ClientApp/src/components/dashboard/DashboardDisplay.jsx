import React from "react";
import NavBar from "../navBar/NavBar";
import Dashboard from "./Dashboard";
import WorkoutHome from "../workouts/WorkoutHome";
import storage from "redux-persist/lib/storage";
import { connect } from "react-redux";
import Logout from "../navBar/Logout";

class DashboardDisplay extends React.Component {
  logoutUser = () => {
    localStorage.removeItem("currentUser");
    storage.removeItem("persist:root");
    this.props.userLogout;
  };
  render() {
    const { logoutUser } = this;
    return (
      <div className="gridContainer">
        {/* <NavBar /> */}
        <div className="logoutButton">
          <Logout className="logout" logoutUser={logoutUser} />
        </div>
        <div className="dashboardGrid">
          <Dashboard />
        </div>
        <div className="workoutGrid">
          <WorkoutHome />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogOut: dispatch({ type: "USER_LOGOUT" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardDisplay);
