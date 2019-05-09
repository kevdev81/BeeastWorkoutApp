export function reducer(state, action) {
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