import React from "react";
import Table from "react-bootstrap/Table";
import "./workouts.css";

class Warmup extends React.Component {
  render() {
    return (
      <Table responsive striped  bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">Lift</th>
            <th colSpan="2" className="tableHeader set">Set 1</th>
            <th colSpan="2" className="tableHeader set">Set 2</th>
            <th colSpan="2" className="tableHeader set">Set 3</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Bench</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>3 reps</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>3 reps</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>3 reps</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>5 reps</td>
            <td>135</td>
            <td>3 reps</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Warmup;
