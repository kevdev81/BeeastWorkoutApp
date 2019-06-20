import React from "react";
import StrengthProfile from "./StrengthProfile";
import "./strengthProfile.css";

class StrengthProfileDisplay extends React.Component {
  render() {
    return (
      <div className="strengthProfileContainer">
        <div className="strengthProfile">
          <StrengthProfile {...this.props} />
        </div>
      </div>
    );
  }
}

export default StrengthProfileDisplay;
