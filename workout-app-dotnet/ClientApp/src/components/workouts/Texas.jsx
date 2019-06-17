import React from "react";
import Table from "react-bootstrap/Table";

class Texas extends React.Component {
  render() {
    const strengthProfile = this.props.strengthProfile;
    return (
      <Table responsive striped bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">Lift</th>
            <th colSpan="3" className="tableHeader set">
              Volume (Day 1)
            </th>
            <th colSpan="3" className="tableHeader set">
              Intensity (Day 2)
            </th>
            <th colSpan="3" className="tableHeader set">
              Recovery (Day 3)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bench</td>
            <td>{Math.round((`${strengthProfile.benchMax}` * 0.9) / 5) * 5}</td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>{Math.round((`${strengthProfile.benchMax}` * 0.9) / 5) * 5}</td>
            <td colSpan="2">3 sets x 5 reps</td>
            <td>
              {Math.round((`${strengthProfile.benchMax}` * 0.95) / 5) * 5}
            </td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>
              {Math.round((`${strengthProfile.shoulderPressMax}` * 0.9) / 5) *
                5}
            </td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>
              {Math.round((`${strengthProfile.shoulderPressMax}` * 0.9) / 5) *
                5}
            </td>
            <td colSpan="2">3 sets x 5 reps</td>
            <td>
              {Math.round((`${strengthProfile.shoulderPressMax}` * 0.95) / 5) *
                5}
            </td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>{Math.round((`${strengthProfile.squatMax}` * 0.9) / 5) * 5}</td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>{Math.round((`${strengthProfile.squatMax}` * 0.8) / 5) * 5}</td>
            <td colSpan="2">2 sets x 5 reps</td>
            <td>
              {Math.round((`${strengthProfile.squatMax}` * 0.95) / 5) * 5}
            </td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>
              {Math.round((`${strengthProfile.deadliftMax}` * 0.9) / 5) * 5}
            </td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>
              {Math.round((`${strengthProfile.deadliftMax}` * 0.8) / 5) * 5}
            </td>
            <td colSpan="2">2 sets x 5 reps</td>
            <td>
              {Math.round((`${strengthProfile.deadliftMax}` * 0.95) / 5) * 5}
            </td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Texas;
