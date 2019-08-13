import React from "react";
import Card from "react-bootstrap/Card";
import Logout from "../navBar/Logout";

class UserDisplay extends React.Component {
  render() {
    const { logoutUser } = this;
    return (
      <Card bg="dark" className="outer">
        <div className="logoutButton">
          <Logout className="logout" logoutUser={logoutUser} />
        </div>
        <br />
        <Card.Header className="greeting">Hello,</Card.Header>
        <Card.Header className="userName">
          {this.props.firstName} {this.props.lastName}
        </Card.Header>
        <Card.Img
          className="userPicture"
          src={this.props.avatar}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          variant="bottom"
        />
        <Card.Title className="userEmail">{this.props.email}</Card.Title>
      </Card>
    );
  }
}

export default UserDisplay;
