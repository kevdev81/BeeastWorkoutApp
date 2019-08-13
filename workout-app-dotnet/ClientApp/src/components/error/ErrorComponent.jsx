import React from "react";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";
import "./error.css";

class ErrorComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="error">
          <Card bg="dark" text="light" className="outer">
            <h1>ERROR 404</h1>
            <hr />
            {this.props.location.pathname === "/journal" ||
            this.props.location.pathname === "/faqs" ? (
              <h3>This page is under construction.</h3>
            ) : (
              <h3>This page does not exist.</h3>
            )}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ErrorComponent);
