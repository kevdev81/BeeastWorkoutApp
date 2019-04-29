import React, { Component } from "react";
import Register from "./components/Register";

class App extends Component {
  displayName = App.name;

  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default App;
