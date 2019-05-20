import React from "react";
import Button from "react-bootstrap/Button";
import { FiLogOut } from "react-icons/fi";

class Logout extends React.Component {
  render() {
    return (
      <Button variant="danger" href="/" onClick={this.props.logoutUser}>
        <FiLogOut />
      </Button>
    );
  }
}

export default Logout;
