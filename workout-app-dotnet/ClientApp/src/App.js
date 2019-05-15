import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageLoader from "./components/pageLoader/PageLoader";

const Login = lazy(() => import("./components/login/Login"));
const Register = lazy(() => import("./components/register/Register"));
const Home = lazy(() => import("./components/home/Home"))

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
          <Route path="/home" exact render={props => <Home {...props} />} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
