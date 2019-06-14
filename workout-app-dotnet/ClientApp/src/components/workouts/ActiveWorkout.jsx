import React from "react";
import Warmup from "./Warmup";
import Wendler from "./Wendler";
import BBB from "./BBB";
import Texas from "./Texas";

export default class ActiveWorkout extends React.Component {
  render() {
    const { benchMax, deadliftMax, squatMax, shoulderPressMax } = this.props;
    const strengthProfile = {
      benchMax,
      deadliftMax,
      squatMax,
      shoulderPressMax
    };
    return (
      <React.Fragment>
        {this.props.active === "Warmup" ? (
          <Warmup strengthProfile={strengthProfile} />
        ) : null}
        {this.props.active === "Wendler" ? (
          <Wendler strengthProfile={strengthProfile} />
        ) : null}
        {this.props.active === "BBB" ? (
          <BBB strengthProfile={strengthProfile} />
        ) : null}
        {this.props.active === "Texas" ? (
          <Texas strengthProfile={strengthProfile} />
        ) : null}
      </React.Fragment>
    );
  }
}
