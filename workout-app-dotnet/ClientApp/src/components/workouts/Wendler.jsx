import React from "react";
import Form from "react-bootstrap/Form";
import WendlerTable from "./WendlerTable";

class Wendler extends React.Component {
  state = {
    week: "1"
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
    const number = this.state.week;
    const week1 = ["5 reps", "5 reps", "5+ reps"];
    const week2 = ["3 reps", "3 reps", "3+ reps"];
    const week3 = ["5 reps", "3 reps", "1+ reps"];
    const week4 = ["5 reps", "5 reps", "5 reps"];
    return (
      <React.Fragment>
        <Form className="wendlerSelect">
          <Form.Group>
            <Form.Control
              as="select"
              name="week"
              value={this.state.week}
              onChange={this.handleInputChange}
            >
              <option value="1">Week 1</option>
              <option value="2">Week 2</option>
              <option value="3">Week 3</option>
              <option value="4">Week 4</option>
              <option value="5">Show All</option>
            </Form.Control>
          </Form.Group>
          {this.state.week === "1" ? (
            <WendlerTable
              week={week1}
              number={number}
              strengthProfile={strengthProfile}
            />
          ) : null}
          {this.state.week === "2" ? (
            <WendlerTable
              week={week2}
              number={number}
              strengthProfile={strengthProfile}
            />
          ) : null}
          {this.state.week === "3" ? (
            <WendlerTable
              week={week3}
              number={number}
              strengthProfile={strengthProfile}
            />
          ) : null}
          {this.state.week === "4" ? (
            <WendlerTable
              week={week4}
              number={number}
              strengthProfile={strengthProfile}
            />
          ) : null}
          {this.state.week === "5" ? (
            <React.Fragment>
              <WendlerTable
                week={week1}
                number="1"
                strengthProfile={strengthProfile}
              />
              <WendlerTable
                week={week2}
                number="2"
                strengthProfile={strengthProfile}
              />
              <WendlerTable
                week={week3}
                number="3"
                strengthProfile={strengthProfile}
              />
              <WendlerTable
                week={week4}
                number="4"
                strengthProfile={strengthProfile}
              />
            </React.Fragment>
          ) : null}
        </Form>
      </React.Fragment>
    );
  }
}

export default Wendler;
