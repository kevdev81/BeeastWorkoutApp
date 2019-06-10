import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageLoaderV2 from "./components/pageLoader/PageLoaderV2";
import "./app.css";

const LoginDisplay = lazy(() => import("./components/login/LoginDisplay"));
const RegisterDisplay = lazy(() =>
  import("./components/register/RegisterDisplay")
);
// const Home = lazy(() => import("./components/home/Home"));
const StrengthProfileDisplay = lazy(() =>
  import("./components/strengthProfile/StrengthProfileDisplay")
);
const Home = lazy(() => import("./components/home/Home"));
const WorkoutHome = lazy(() => import("./components/workouts/WorkoutHome"));
const ErrorComponent = lazy(() => import("./components/error/ErrorComponent"));

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: ""
  //   };
  // }

  render() {
    return (
      <Suspense fallback={<PageLoaderV2 />}>
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
            <Route
              path="/workoutHome"
              exact
              render={props => <WorkoutHome {...props} />}
            />
            <Route
              path="*"
              exact={true}
              component={props => <ErrorComponent {...props} />}
            />
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default withRouter(App);
