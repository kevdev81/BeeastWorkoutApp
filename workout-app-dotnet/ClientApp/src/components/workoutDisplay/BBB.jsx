import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class BBB extends React.Component {
  state = {
    bbbPercentage: "0.5"
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const strengthProfile = this.props.strengthProfile;
    return (
      <React.Fragment>
        <Form className="bbbSelect">
          <Form.Group>
            <Form.Control
              as="select"
              name="bbbPercentage"
              value={this.state.bbbPercentage}
              onChange={this.handleInputChange}
            >
              <option value="0.3">30%</option>
              <option value="0.35">35%</option>
              <option value="0.4">40%</option>
              <option value="0.45">45%</option>
              <option value="0.5" selected>
                Default (50%)
              </option>
              <option value="0.55">55%</option>
              <option value="0.6">60%</option>
              <option value="0.65">65%</option>
              <option value="0.7">70%</option>
            </Form.Control>
          </Form.Group>
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
                <td>
                  {Math.round(
                    (`${strengthProfile.benchMax}` *
                      `${this.state.bbbPercentage}`) /
                      5
                  ) * 5}
                </td>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Squat</td>
                <td>
                  {Math.round(
                    (`${strengthProfile.squatMax}` *
                      `${this.state.bbbPercentage}`) /
                      5
                  ) * 5}
                </td>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Deadlift</td>
                <td>
                  {Math.round(
                    (`${strengthProfile.deadliftMax}` *
                      `${this.state.bbbPercentage}`) /
                      5
                  ) * 5}
                </td>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Shoulder Press</td>
                <td>
                  {Math.round(
                    (`${strengthProfile.shoulderPressMax}` *
                      `${this.state.bbbPercentage}`) /
                      5
                  ) * 5}
                </td>
                <td>5</td>
                <td>10</td>
              </tr>
            </tbody>
          </Table>
        </Form>
        <Card.Footer>
          <p>
            *Boring But Big workouts are calculated by taking a percentage of
            the 1 rep max.
            <br />
            *The default percentage is 50% and can be changed above.
          </p>
          <Button size="sm" variant="warning">
            Email
          </Button>
        </Card.Footer>
      </React.Fragment>
    );
  }
}

export default BBB;
