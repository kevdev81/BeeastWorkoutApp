import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./strengthProfile.css";

class StrengthProfileForm extends React.Component {
  render() {
    return (
      <Card className="outer">
        <h1>Strength Profile</h1>
        <Form>
          <Form.Group>
            <Form.Label>Weight:</Form.Label>
            <Form.Control
              required
              min="0"
              placeholder="Body Weight (lbs)"
              type="number"
              name="weight"
              value={this.props.weight}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bench Max:</Form.Label>
            <Form.Control
              required
              min="0"
              placeholder="Bench Max (lbs)"
              type="number"
              name="benchMax"
              value={this.props.benchMax}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Deadlift Max:</Form.Label>
            <Form.Control
              required
              min="0"
              placeholder="Deadlift Max (lbs)"
              type="number"
              name="deadliftMax"
              value={this.props.deadliftMax}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Squat Max:</Form.Label>
            <Form.Control
              required
              min="0"
              placeholder="Squat Max (lbs)"
              type="number"
              name="squatMax"
              value={this.props.squatMax}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Shoulder Press Max:</Form.Label>
            <Form.Control
              required
              min="0"
              placeholder="ShoulderPress Max (lbs)"
              type="number"
              name="shoulderPressMax"
              value={this.props.shoulderPressMax}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Button
              type="button"
              variant="info"
              block
              onClick={this.props.submitStrengthProfile}
            >
              Submit
            </Button>
          </Form.Group>
          <Form.Group className="col-md-6">
            <Button
              type="button"
              variant="secondary"
              block
              onClick={this.props.resetForm}
            >
              Reset
            </Button>
          </Form.Group>
        </Form>
      </Card>
    );
  }
}

export default StrengthProfileForm;
