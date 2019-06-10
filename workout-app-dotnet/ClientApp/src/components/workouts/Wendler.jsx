import React from "react";
import Table from "react-bootstrap/Table";
import "./workouts.css";
class Wendler extends React.Component {
  state = {
    w1: "5 reps",
    w1ls: "5+ reps",
    w2: "3 reps",
    w2ls: "3+ reps",
    w3s1: "5 reps",
    w3s2: "3 reps",
    w3ls: "1+ reps"
  };
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
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1ls}</td>
          </tr>
          <tr>
            <td>Set 2</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1ls}</td>
          </tr>
          <tr>
            <td>Set 3</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1}</td>
            <td>135</td>
            <td>{this.state.w1ls}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Wendler;
