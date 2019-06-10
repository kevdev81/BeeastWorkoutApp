import React from "react";
import Table from "react-bootstrap/Table";
import "./workouts.css";

class BBB extends React.Component {
  render() {
    return (
      <Table responsive striped  bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">Lift</th>
            <th className="tableHeader set">Set 1</th>
            <th className="tableHeader set">Set 2</th>
            <th className="tableHeader set">Set 3</th>
            <th className="tableHeader set">Set 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bench</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
            <td>135</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BBB;
