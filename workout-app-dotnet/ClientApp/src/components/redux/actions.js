import { store } from "./store";

export function setStrengthProfile(strengthProfile) {
  store.dispatch({ type: "SET_STRENGTH_PROFILE", strengthProfile });
}

export function setUserInfo(userInfo) {
  store.dispatch({ type: "SET_USER_INFO", userInfo });
}
