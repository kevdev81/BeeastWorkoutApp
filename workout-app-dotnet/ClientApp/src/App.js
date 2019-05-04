import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageLoader from "./components/pageLoader/PageLoader";

const Login = lazy(() => import("./components/login/LoginWithEmail"));
const Register = lazy(() => import("./components/register/RegisterWithEmail"));

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: ""
  //   };
  // }

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
