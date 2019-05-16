import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageLoader from "./components/pageLoader/PageLoader";
import "./app.css";

const LoginDisplay = lazy(() => import("./components/login/LoginDisplay"));
const RegisterDisplay = lazy(() =>
  import("./components/register/RegisterDisplay")
);
const Home = lazy(() => import("./components/home/Home"));
const StrengthProfileDisplay = lazy(() =>
  import("./components/strengthProfile/StrengthProfileDisplay")
);

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
        <div className="appWrapper">
          <Switch>
            <Route
              path="/"
              exact
              render={props => <LoginDisplay {...props} />}
            />
            <Route
              path="/register"
              exact
              render={props => <RegisterDisplay {...props} />}
            />
            <Route path="/home" exact render={props => <Home {...props} />} />
            <Route
              path="/strengthProfile"
              exact
              render={props => <StrengthProfileDisplay {...props} />}
            />
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default withRouter(App);
