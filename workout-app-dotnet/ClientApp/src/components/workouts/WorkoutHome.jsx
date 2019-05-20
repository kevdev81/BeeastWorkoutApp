import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "../navBar/NavBar";
import "./workoutHome.css";

class WorkoutHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="workoutHome">
          <Nav fill variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="link-1">531</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Boring But Big</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Texas Method</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkoutHome;
