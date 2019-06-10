import React from "react";
import StrengthProfile from "./StrengthProfile";
import Card from "react-bootstrap/Card";
import "./strengthProfile.css";

class StrengthProfileDisplay extends React.Component {
  render() {
    return (
      <div className="strengthProfileWrapper">
        <div className="strengthProfileContainer">
          <div className="strengthProfile">
            <Card className="outer">
              <StrengthProfile {...this.props} />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default StrengthProfileDisplay;
