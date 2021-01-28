import { cloneDeep } from 'lodash';

export const allCharacterReducer = (characters = [], action) => {
    if (action.type === 'GET_CHARACTERS') {
        return action.payload;
    }
    return characters;
};

export const characterQuery = (query = '', action) => {
    if (action.type === 'SET_QUERY') {
        return action.payload;
    }
    return query;
};

export const buildTeam = (team = [], action) => {
    if (action.type === 'ADD_MEMBER') {
        return [...team, action.payload];
    }
    return team;
};

export const buildTeamIndex = (teamIndex = {}, action) => {
    if (action.type === 'ADD_MEMBER') {
        const newIndex = cloneDeep(teamIndex)
        newIndex[action.payload.main.id] = true;
        return newIndex;
    }
    return teamIndex;
};
