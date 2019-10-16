import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ActiveWorkout from "./ActiveWorkout";
import { connect } from "react-redux";
import "./workoutHome.css";

class WorkoutHome extends React.Component {
  state = {
    active: "Warmup"
  };

  setActiveWorkout = function(active) {
    this.setState({ active });
  };

  render() {
    const {
      benchMax,
      deadliftMax,
      squatMax,
      shoulderPressMax
    } = this.props.strengthProfile;
    return (
      <React.Fragment>
        <div className="workout">
          <Card className="workoutHome outer" bg="dark" text="white">
            <h1>Workouts</h1>
            <hr />
            <Card bg="dark" className="workoutNavContainer">
              <Nav
                variant="pills"
                defaultActiveKey="Warmup"
                onSelect={selectedKey =>
                  this.setActiveWorkout(`${selectedKey}`)
                }
              >
                <Nav.Item>
                  <Nav.Link eventKey="Warmup">Warm Up</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Wendler">Wendler's 5-3-1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="BBB">Boring But Big</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Texas">Texas Method</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
            <Card className="workoutMain">
              <ActiveWorkout
                active={this.state.active}
                benchMax={benchMax}
                deadliftMax={deadliftMax}
                squatMax={squatMax}
                shoulderPressMax={shoulderPressMax}
              />
            </Card>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    strengthProfile: state.strengthProfileReducer
  };
};

export default connect(mapStateToProps)(WorkoutHome);
