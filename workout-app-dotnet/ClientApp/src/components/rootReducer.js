import { combineReducers } from "redux";

const strengthProfileReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_STRENGTH_PROFILE":
      return {
        strengthProfile: action.strengthProfile
      };
    default:
      return state;
  }
};

export default combineReducers({
  strengthProfileReducer
});
