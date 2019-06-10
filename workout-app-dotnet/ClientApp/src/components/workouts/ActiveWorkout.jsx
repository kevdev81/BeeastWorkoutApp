import React from "react";
import Warmup from "./Warmup";
import Wendler from "./Wendler";
import BBB from "./BBB";
import Texas from "./Texas";

export default class ActiveWorkout extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.active === "Warmup" ? <Warmup /> : null}
        {this.props.active === "Wendler" ? <Wendler /> : null}
        {this.props.active === "BBB" ? <BBB /> : null}
        {this.props.active === "Texas" ? <Texas /> : null}
      </React.Fragment>
    );
  }
}
