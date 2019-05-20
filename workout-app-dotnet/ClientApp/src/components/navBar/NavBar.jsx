import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import "./navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBarContainer">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">Beeast</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/journal">Journal</Nav.Link>
            <Nav.Link href="/faqs">FAQs</Nav.Link>
          </Nav>
          <Button variant="info" href="/workoutHome">
            Workouts
          </Button>
          <Button variant="danger" href="/workoutHome">
            Workouts
          </Button>
          {/* <DropdownButton
            as={ButtonGroup}
            variant="secondary"
            title="Profile"
            id="bg-vertical-dropdown-1"
          >
            <Dropdown.Item eventKey="1">Edit Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">View Profile</Dropdown.Item>
          </DropdownButton> */}
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
