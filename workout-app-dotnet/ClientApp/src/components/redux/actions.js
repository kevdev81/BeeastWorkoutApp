import { store } from "./store";

export function setStrengthProfile(strengthProfile) {
  store.dispatch({ type: "SET_STRENGTH_PROFILE", strengthProfile });
}

export function setUserInfo(userInfo) {
  store.dispatch({ type: "SET_USER_INFO", userInfo });
}
export function setHasProfile(bool) {
  store.dispatch({ type: "SET_HAS_PROFILE", bool });
}

export function userLogOut() {
  store.dispatch({ type: "USER_LOGOUT" });
}
