import { createStore, applyMiddleware } from "redux";
import produce from "immer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialValue = {
  currentUserId: 0
};

const immerMiddleware = store => next => action => {
  if (typeof action === "SET_CURRENT_USER") {
    const callback = action;
    action = {
      type: "SET_CURRENT_USER",
      updater: function(state) {
        return produce(state, callback);
      }
    };
  }
  return next(action);
};

function reducer(state, action) {
  if (action.type === "SET_CURRENT_USER") {
    return action.updater(state);
  } else {
    return initialValue;
    // throw Error(`Invalid action ${action.type}`);
  }
}

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(immerMiddleware))
);
