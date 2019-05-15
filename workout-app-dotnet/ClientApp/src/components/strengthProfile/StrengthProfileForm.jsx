import React from "react";
import { Button } from "reactstrap";

class StrengthProfileForm extends React.Component {
  render() {
    return (
      <form>
        <label>Weight:</label>
        <input
          className="form-control"
          placeholder="Please enter your weight in pounds."
          type="number"
          name="weight"
          value={this.props.weight}
          onChange={this.props.handleInputChange}
        />
        <label>Bench Max:</label>
        <input
          className="form-control"
          placeholder="Please enter your weight in pounds."
          type="number"
          name="benchMax"
          value={this.props.benchMax}
          onChange={this.props.handleInputChange}
        />
        <label>Deadlift Max:</label>
        <input
          className="form-control"
          placeholder="Please enter your Deadlift Max in pounds."
          type="number"
          name="deadliftMax"
          value={this.props.deadliftMax}
          onChange={this.props.handleInputChange}
        />
        <label>Squat Max:</label>
        <input
          className="form-control"
          placeholder="Please enter your Squat Max in pounds."
          type="number"
          name="squatMax"
          value={this.props.squatMax}
          onChange={this.props.handleInputChange}
        />
        <label>Shoulder Press Max:</label>
        <input
          className="form-control"
          placeholder="Please enter your Shoulder Press Max in pounds."
          type="number"
          name="shoulderPressMax"
          value={this.props.shoulderPressMax}
          onChange={this.props.handleInputChange}
        />
        <div>
          <Button
            type="button"
            color="info"
            onClick={this.props.submitStrengthProfile}
          >
            Submit
          </Button>
          <Button type="button">Reset</Button>
        </div>
      </form>
    );
  }
}

export default StrengthProfileForm;
