import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import NavBar from "../navBar/NavBar";
import "./workoutHome.css";

class WorkoutHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="workout">
          <Card className="workoutSidebar">
            <Nav
              defaultActiveKey="link-1"
              variant="pills"
              className="flex-column"
            >
              <h3>Workouts</h3>
              <Nav.Link className="wendler" eventKey="link-1">
                531 Wendler's
              </Nav.Link>
              <Nav.Link className="bbb" eventKey="link-2">
                Boring But Big
              </Nav.Link>
              <Nav.Link className="texas" eventKey="link-3">
                Texas Method
              </Nav.Link>
            </Nav>
          </Card>
          <Card className="workoutMain">Main</Card>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkoutHome;
