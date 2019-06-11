import React from "react";
import Table from "react-bootstrap/Table";

class BBB extends React.Component {
  render() {
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
            <td>135</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Deadlift</td>
            <td>135</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Squat</td>
            <td>135</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Shoulder Press</td>
            <td>135</td>
            <td>5</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BBB;
