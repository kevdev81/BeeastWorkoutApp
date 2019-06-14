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
            <td>{strengthProfile.benchMax}</td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>{strengthProfile.benchMax}</td>
            <td colSpan="2">3 sets x 5 reps</td>
            <td>{strengthProfile.benchMax}</td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td colSpan="2">3 sets x 5 reps</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>{strengthProfile.squatMax}</td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>{strengthProfile.squatMax}</td>
            <td colSpan="2">2 sets x 5 reps</td>
            <td>{strengthProfile.squatMax}</td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td colSpan="2">5 sets x 5 reps</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td colSpan="2">2 sets x 5 reps</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td colSpan="2">1 set x 5 reps</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Texas;
