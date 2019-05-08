import store from "./store";

export function setCurrentUserId(currentUserId) {
  store.dispatch({ type: "SET_CURRENT_USER_ID", currentUserId });
}
