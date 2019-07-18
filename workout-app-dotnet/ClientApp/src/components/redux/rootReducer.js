import { combineReducers } from "redux";
import "./actions";
import storage from "redux-persist/lib/storage";

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

const initialUserInfo = [
  {
    id: 0,
    firstName: "0",
    lastName: "0",
    email: "0",
    hasProfile: false
  }
];
const userInfoReducer = (state = initialUserInfo, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        id: action.userInfo.id,
        firstName: action.userInfo.firstName,
        lastName: action.userInfo.lastName,
        email: action.userInfo.email,
        hasProfile: action.userInfo.hasProfile
      };
    case "SET_HAS_PROFILE":
      return {
        ...state,
        hasProfile: action.bool
      };
    default:
      return state;
  }
};

const logoutReducer = (state = [], action) => {
  switch (action.type) {
    case "USER_LOGOUT":
      return {
        state: undefined
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  strengthProfileReducer,
  userInfoReducer,
  logoutReducer
});

export default rootReducer;
