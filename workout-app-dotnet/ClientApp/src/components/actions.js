export const setCurrentUser = currentUserId => {
  return draft => {
    draft.currentUserId = currentUserId;
  };
};
