import React from "react";
import Dashboard from "./Dashboard";
import WorkoutHome from "../workouts/WorkoutHome";
import storage from "redux-persist/lib/storage";
import { connect } from "react-redux";

class DashboardDisplay extends React.Component {
  logoutUser = () => {
    localStorage.removeItem("currentUser");
    storage.removeItem("persist:root");
    this.props.userLogout;
  };
  render() {
    return (
      <div className="gridContainer">
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
