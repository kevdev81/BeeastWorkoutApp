import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import NavBar from "../navBar/NavBar";
import Wendler from "./Wendler";
import BBB from "./BBB";
import Texas from "./Texas";
import { Route, Switch, withRouter } from "react-router-dom";
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
              <Nav.Link eventKey="link-1">
                531 Wendler's
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                Boring But Big
              </Nav.Link>
              <Nav.Link eventKey="link-3">
                Texas Method
              </Nav.Link>
            </Nav>
          </Card>
          <Card className="workoutMain">
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(WorkoutHome);
