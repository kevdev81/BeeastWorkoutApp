import React from "react";
import Table from "react-bootstrap/Table";

class BBB extends React.Component {
  render() {
    const strengthProfile = this.props.strengthProfile;
    return (
      <Table responsive striped bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">Lift</th>
            <th className="tableHeader set">Pounds</th>
            <th className="tableHeader set">Sets</th>
            <th className="tableHeader set">Reps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bench</td>
            <td>{strengthProfile.benchMax}</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>{strengthProfile.squatMax}</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td>5</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BBB;
