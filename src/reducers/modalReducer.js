export const teamModalVisibilityReducer = (teamModalVisibility = false, action) => {
    if (action.type === 'SHOW_MODAL' && action.payload.modalName === 'team') {
        return action.payload.visibility;
    }
    return teamModalVisibility;
};

export const characterModalVisibilityReducer = (characterModalVisibility = false, action) => {
    if (action.type === 'SHOW_MODAL' && action.payload.modalName === 'character') {
        return action.payload.visibility;
    }
    return characterModalVisibility;
};
