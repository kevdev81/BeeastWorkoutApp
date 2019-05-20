import { createStore } from "redux";

function reducer(state, action) {
  if (!state) {
    return {
      isAuth: false
    };
  }

  if (action.type === "IS_AUTH_USER") {
    return {
      isAuth: action.isAuthUser
    };
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
