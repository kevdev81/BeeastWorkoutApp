import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageLoader from "./components/pageLoader/PageLoader";

const Login = lazy(() => import("./components/login/Login"));
const Register = lazy(() => import("./components/register/Register"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  render() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact render={props => <Login {...props} />} />
          <Route
            path="/register"
            exact
            render={props => <Register {...props} />}
          />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
