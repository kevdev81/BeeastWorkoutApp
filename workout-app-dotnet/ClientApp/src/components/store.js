import { createStore } from "redux";

function reducer(state, action) {
  if (!state) {
    return {
      currentUserId: 0
    };
  }

  if (action.type === "SET_CURRENT_USER_ID") {
    return {
      ...state,
      currentUserId: action.currentUserId
    };
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);