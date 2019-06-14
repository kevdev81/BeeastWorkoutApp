import React from "react";
import Table from "react-bootstrap/Table";

class WendlerTable extends React.Component {
  render() {
    const strengthProfile = this.props.strengthProfile;
    return (
      <Table responsive striped bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">
              Week {this.props.number}
            </th>
            <th colSpan="2" className="tableHeader set">
              Bench (Day 1)
            </th>
            <th colSpan="2" className="tableHeader set">
              Squat (Day 2)
            </th>
            <th colSpan="2" className="tableHeader set">
              Deadlift (Day 3)
            </th>
            <th colSpan="2" className="tableHeader set">
              Shoulder Press (Day 4)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set 1</td>
            <td>{strengthProfile.benchMax}</td>
            <td>{this.props.week[0]}</td>
            <td>{strengthProfile.squatMax}</td>
            <td>{this.props.week[0]}</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td>{this.props.week[0]}</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td>{this.props.week[0]}</td>
          </tr>
          <tr>
            <td>Set 2</td>
            <td>{strengthProfile.benchMax}</td>
            <td>{this.props.week[1]}</td>
            <td>{strengthProfile.squatMax}</td>
            <td>{this.props.week[1]}</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td>{this.props.week[1]}</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td>{this.props.week[1]}</td>
          </tr>
          <tr>
            <td>Set 3</td>
            <td>{strengthProfile.benchMax}</td>
            <td>{this.props.week[2]}</td>
            <td>{strengthProfile.squatMax}</td>
            <td>{this.props.week[2]}</td>
            <td>{strengthProfile.deadliftMax}</td>
            <td>{this.props.week[2]}</td>
            <td>{strengthProfile.shoulderPressMax}</td>
            <td>{this.props.week[2]}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default WendlerTable;
