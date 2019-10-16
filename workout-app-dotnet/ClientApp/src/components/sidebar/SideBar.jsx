import React from "react";
import { Button } from "react-bootstrap";

class SideBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="info" size="lg" block onClick={this.props.setHome}>
          Home
        </Button>
        <Button variant="info" size="lg" block onClick={this.props.setProfile}>
          Profile
        </Button>
        <Button variant="info" size="lg" block onClick={this.props.setWorkout}>
          Workouts
        </Button>
      </React.Fragment>
    );
  }
}

export default SideBar;
