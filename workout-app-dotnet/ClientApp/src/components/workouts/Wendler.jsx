import React from "react";
import Table from "react-bootstrap/Table";
import "./workouts.css";
class Wendler extends React.Component {
  render() {
    return (
      <Table responsive striped bordered hover variant="dark">
        <thead className="tableHeaderContainer">
          <tr>
            <th className="tableLeftTopCorner tableHeader">Week 1</th>
            <th colSpan="2" className="tableHeader set">
              Bench
            </th>
            <th colSpan="2" className="tableHeader set">
              Squat
            </th>
            <th colSpan="2" className="tableHeader set">
              Deadlift
            </th>
            <th colSpan="2" className="tableHeader set">
              Shoulder Press
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set 1</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5+ reps</td>
          </tr>
          <tr>
            <td>Set 2</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5+ reps</td>
          </tr>
          <tr>
            <td>Set 3</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5 reps</td>
            <td>135</td> <td>5+ reps</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Wendler;
