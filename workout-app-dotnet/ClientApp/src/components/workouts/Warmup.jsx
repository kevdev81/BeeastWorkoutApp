import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

class Warmup extends React.Component {
  state = {
    warmupPercentage: "0.9"
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
    return (
      <React.Fragment>
        <Form className="warmupSelect">
          <Form.Group>
            <Form.Control
              as="select"
              name="warmupPercentage"
              value={this.state.warmupPercentage}
              onChange={this.handleInputChange}
            >
              <option value="0.7">70%</option>
              <option value="0.75">75%</option>
              <option value="0.8">80%</option>
              <option value="0.85">85%</option>
              <option value="0.9" selected>
                Default (90%)
              </option>
              <option value="0.95">95%</option>
              <option value="1.00">100%</option>
            </Form.Control>
          </Form.Group>
          <Table responsive striped bordered hover variant="dark">
            <thead className="tableHeaderContainer">
              <tr>
                <th className="tableLeftTopCorner tableHeader">Lift</th>
                <th colSpan="2" className="tableHeader set">
                  Set 1
                </th>
                <th colSpan="2" className="tableHeader set">
                  Set 2
                </th>
                <th colSpan="2" className="tableHeader set">
                  Set 3
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bench</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.benchMax}` *
                      `${this.state.warmupPercentage}` *
                      0.5) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.benchMax}` *
                      `${this.state.warmupPercentage}` *
                      0.5) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.benchMax}` *
                      `${this.state.warmupPercentage}` *
                      0.6) /
                      5
                  ) * 5}
                </td>
                <td>3 reps</td>
              </tr>
              <tr>
                <td>Squat</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.squatMax}` *
                      `${this.state.warmupPercentage}` *
                      0.4) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.squatMax}` *
                      `${this.state.warmupPercentage}` *
                      0.5) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.squatMax}` *
                      `${this.state.warmupPercentage}` *
                      0.6) /
                      5
                  ) * 5}
                </td>
                <td>3 reps</td>
              </tr>
              <tr>
                <td>Deadlift</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.deadliftMax}` *
                      `${this.state.warmupPercentage}` *
                      0.4) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.deadliftMax}` *
                      `${this.state.warmupPercentage}` *
                      0.5) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.deadliftMax}` *
                      `${this.state.warmupPercentage}` *
                      0.6) /
                      5
                  ) * 5}
                </td>
                <td>3 reps</td>
              </tr>
              <tr>
                <td>Shoulder Press</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.shoulderPressMax}` *
                      `${this.state.warmupPercentage}` *
                      0.4) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.shoulderPressMax}` *
                      `${this.state.warmupPercentage}` *
                      0.5) /
                      5
                  ) * 5}
                </td>
                <td>5 reps</td>
                <td>
                  {Math.round(
                    (`${this.props.strengthProfile.shoulderPressMax}` *
                      `${this.state.warmupPercentage}` *
                      0.6) /
                      5
                  ) * 5}
                </td>
                <td>3 reps</td>
              </tr>
            </tbody>
          </Table>
        </Form>
        <Card.Footer>
          <p>
            *Warmup's are calculated by using a base number (90% of max) before
            calculating sets.
            <br />
            Set 1 is calculated by taking 40% of the base number.
            <br />
            Set 2 is calculated by taking 50% of the base number.
            <br />
            Set 3 is calculated by taking 60% of the base number.
            <br />
            The base percentage can be changed above.
          </p>
          <Button size="sm" variant="warning">
            Email
          </Button>
        </Card.Footer>
      </React.Fragment>
    );
  }
}

export default Warmup;
