import store from "./store";

export function isAuthUser(authorized) {
  store.dispatch({ type: "IS_AUTH_USER", authorized });
}
