import React from "react";
import Card from "react-bootstrap/Card";
import getUserById from "./homeService";

class ProfileDisplay extends React.Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Header>Profile</Card.Header>
        <Card.Title>Compound Lift Maximums</Card.Title>
        <Card.Body>
          <div>
            <div>Bench Max:</div>
            {this.props.benchMax}
            <hr />
          </div>
          <div>
            <div>Deadlift Max:</div>
            {this.props.deadliftMax}
            <hr />
          </div>
          <div>
            <div>Squat Max:</div>
            {this.props.squatMax}
            <hr />
          </div>
          <div>
            <div>ShoulderPress Max:</div>
            {this.props.shoulderPressMax}
            <hr />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileDisplay;
