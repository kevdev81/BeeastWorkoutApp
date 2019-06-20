import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logout from "./Logout";
import { FiHome, FiBook, FiHelpCircle, FiClipboard } from "react-icons/fi";
import { connect } from "react-redux";
import storage from "redux-persist/lib/storage";
import "./navBar.css";

class NavBar extends React.Component {
  logoutUser = () => {
    localStorage.removeItem("currentUser");
    storage.removeItem("persist:root");
    this.props.userLogout;
  };
  render() {
    const { logoutUser } = this;
    return (
      <div className="navBarContainer">
        <Navbar sticky="top" bg="dark" variant="dark" className="navBar">
          <Navbar.Brand href="/home">Beeast</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">
              <Button variant="light">
                <FiHome />
                Home
              </Button>
            </Nav.Link>
            <Nav.Link href="/journal">
              <Button variant="light">
                <FiBook />
                Journal
              </Button>
            </Nav.Link>
            <Nav.Link href="/faqs">
              <Button variant="light">
                <FiHelpCircle />
                FAQs
              </Button>
            </Nav.Link>
            <Nav.Link href="/workoutHome">
              <Button variant="light">
                <FiClipboard />
                Workouts
              </Button>
            </Nav.Link>
          </Nav>
          <Logout className="logout" logoutUser={logoutUser} />
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogOut: dispatch({ type: "USER_LOGOUT" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
