import React from "react";
import Card from "react-bootstrap/Card";

class UserDisplay extends React.Component {
  render() {
    return (
      <Card bg="dark" text="white" className="outer">
        <Card.Header>
          {this.props.firstName} {this.props.lastName}
        </Card.Header>
        <Card.Title>{this.props.email}</Card.Title>
        <Card.Img
          //   src={this.props.avatar}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </Card>
    );
  }
}

export default UserDisplay;
