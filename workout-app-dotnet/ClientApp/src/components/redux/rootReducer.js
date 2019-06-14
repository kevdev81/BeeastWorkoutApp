import { combineReducers } from "redux";

const initialStrengthProfile = [
  {
    benchMax: 0,
    deadliftMax: 0,
    squatMax: 0,
    shoulderPressMax: 0
  }
];
const strengthProfileReducer = (state = initialStrengthProfile, action) => {
  switch (action.type) {
    case "SET_STRENGTH_PROFILE":
      return {
        benchMax: action.strengthProfile.benchMax,
        deadliftMax: action.strengthProfile.deadliftMax,
        squatMax: action.strengthProfile.squatMax,
        shoulderPressMax: action.strengthProfile.shoulderPressMax
      };
    default:
      return state;
  }
};

const userInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        userInfo: action.userInfo
      };
    default:
      return state;
  }
};

export default combineReducers({
  strengthProfileReducer,
  userInfoReducer
});
