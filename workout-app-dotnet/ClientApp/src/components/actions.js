import { store } from "./store";

export function setStrengthProfile(strengthProfile) {
  store.dispatch({ type: "SET_STRENGTH_PROFILE", strengthProfile });
}
