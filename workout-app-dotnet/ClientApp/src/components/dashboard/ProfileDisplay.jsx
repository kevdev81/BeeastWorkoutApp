import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ProfileDisplay extends React.Component {
  render() {
    return (
      <Card bg="dark" className="outer">
        <Card.Title className="profDispTitle">
          Compound Lift Maximums
        </Card.Title>
        <Card.Body>
          <div className="profDisplayContainer">
            <div className="profDisp1">
              <div className="dispContent">
                <div className="maxTitle">Bench Max:</div>
                <div className="maxNum">{this.props.benchMax}</div>
                <Form className="update">
                  <Form.Group>
                    <Form.Control
                      min="0"
                      className="updateInput"
                      placeholder="Edit Max"
                      type="number"
                    />
                    <Button className="updateBtn" block variant="warning">
                      Update
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="profDisp2">
              <div className="dispContent">
                <div className="maxTitle">Squat Max:</div>
                <div className="maxNum">{this.props.squatMax}</div>
                <Form className="update">
                  <Form.Group>
                    <Form.Control
                      min="0"
                      className="updateInput"
                      placeholder="Edit Max"
                      type="number"
                    />
                    <Button className="updateBtn" block variant="warning">
                      Update
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="profDisp3">
              <div className="dispContent">
                <div className="maxTitle">Deadlift Max:</div>
                <div className="maxNum">{this.props.deadliftMax}</div>
                <Form className="update">
                  <Form.Group>
                    <Form.Control
                      min="0"
                      className="updateInput"
                      placeholder="Edit Max"
                      type="number"
                    />
                    <Button className="updateBtn" block variant="warning">
                      Update
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="profDisp4">
              <div className="dispContent">
                <div className="maxTitle">ShoulderPress Max:</div>
                <div className="maxNum">{this.props.shoulderPressMax}</div>
                <Form className="update">
                  <Form.Group>
                    <Form.Control
                      min="0"
                      className="updateInput"
                      placeholder="Edit Max"
                      type="number"
                    />
                    <Button className="updateBtn" block variant="warning">
                      Update
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileDisplay;
