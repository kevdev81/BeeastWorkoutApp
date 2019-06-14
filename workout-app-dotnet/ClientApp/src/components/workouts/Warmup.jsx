import React from "react";
import Table from "react-bootstrap/Table";

class Warmup extends React.Component {
  render() {
    return (
      <Table responsive striped bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">Lift</th>
            <th colSpan="2" className="tableHeader set">
              Set 1
            </th>
            <th colSpan="2" className="tableHeader set">
              Set 2
            </th>
            <th colSpan="2" className="tableHeader set">
              Set 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bench</td>
            <td>{this.props.strengthProfile.benchMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.benchMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.benchMax}</td>
            <td>3 reps</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>{this.props.strengthProfile.deadliftMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.deadliftMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.deadliftMax}</td>
            <td>3 reps</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>{this.props.strengthProfile.squatMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.squatMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.squatMax}</td>
            <td>3 reps</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>{this.props.strengthProfile.shoulderPressMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.shoulderPressMax}</td>
            <td>5 reps</td>
            <td>{this.props.strengthProfile.shoulderPressMax}</td>
            <td>3 reps</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Warmup;
