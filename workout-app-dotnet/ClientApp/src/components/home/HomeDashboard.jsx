import React from "react";
import "./homeDashboard.css";
import ProfileDisplay from "../dashboard/ProfileDisplay";
import UserDisplay from "../dashboard/UserDisplay";
import WorkoutHome from "../workouts/WorkoutHome";
import SideBar from "../sidebar/SideBar";

class HomeDashboard extends React.Component {
  state = {
    component: null
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  setHome = () => {
    this.setState({ component: null });
  };
  setProfile = () => {
    this.setState({ component: "profile" });
  };
  setWorkout = () => {
    this.setState({ component: "workout" });
  };

  render() {
    const { setHome, setProfile, setWorkout } = this;
    return (
      <div className="dashboardContainer col-md-12">
        <div className="sidebar col-md-3">
          <SideBar
            setHome={setHome}
            setProfile={setProfile}
            setWorkout={setWorkout}
          />
        </div>
        <div className="dashboardComponents col-md-offset-3">
          <div className="componentWrapper col-md-12">
            <div className="userDisplay">
              {this.state.component == null ? <UserDisplay /> : null}
            </div>
            <div className="profileDisplay">
              {this.state.component == "profile" ? <ProfileDisplay /> : null}
            </div>
            <div className="workoutDisplay">
              {this.state.component == "workout" ? <WorkoutHome /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDashboard;
