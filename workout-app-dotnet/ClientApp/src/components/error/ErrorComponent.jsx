import React from "react";
import NavBar from "../navBar/NavBar";
import Card from "react-bootstrap/Card";
import "./error.css";

class ErrorComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="error">
          <Card bg="dark" text="light" className="outer">
            <h1>ERROR 404</h1>
            <hr />
            <h3>This page does not exist.</h3>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorComponent;
