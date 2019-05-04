export function setCurrentUser(currentUserId) {
  return draft => {
    draft.currentUserId = currentUserId;
  };
}
