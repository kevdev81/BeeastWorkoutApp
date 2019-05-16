import React from "react";
import Button from "react-bootstrap/Button";
import "./strengthProfile.css";

class StrengthProfileForm extends React.Component {
  render() {
    return (
      <div className="strengthProfileForm">
        <h1>Strength Profile</h1>
        <div className="col-md-12">
          <form>
            <div className="form-group">
              <label>Weight:</label>
              <input
                className="form-control"
                placeholder="Please enter your weight in pounds."
                type="number"
                name="weight"
                value={this.props.weight}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Bench Max:</label>
              <input
                className="form-control"
                placeholder="Please enter your weight in pounds."
                type="number"
                name="benchMax"
                value={this.props.benchMax}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Deadlift Max:</label>
              <input
                className="form-control"
                placeholder="Please enter your Deadlift Max in pounds."
                type="number"
                name="deadliftMax"
                value={this.props.deadliftMax}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Squat Max:</label>
              <input
                className="form-control"
                placeholder="Please enter your Squat Max in pounds."
                type="number"
                name="squatMax"
                value={this.props.squatMax}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Shoulder Press Max:</label>
              <input
                className="form-control"
                placeholder="Please enter your Shoulder Press Max in pounds."
                type="number"
                name="shoulderPressMax"
                value={this.props.shoulderPressMax}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <Button
                type="button"
                variant="info"
                block
                onClick={this.props.submitStrengthProfile}
              >
                Submit
              </Button>
            </div>
            <div className="col-md-6">
              <Button type="button" variant="secondary" block>
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StrengthProfileForm;
