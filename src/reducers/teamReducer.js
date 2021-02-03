import { cloneDeep } from 'lodash';

export const teamReducer = (team = [], action) => {
    if (action.type === 'ADD_MEMBER') {
        return [...team, action.payload];
    } else if (action.type === 'REMOVE_MEMBER') {
        const foundIndex = team.findIndex(character => character.main.id === action.payload.main.id);
        return [...team.slice(0, foundIndex), ...team.slice(foundIndex + 1)];
    } else if (action.type === 'LOAD_TEAM') {
        return [...action.payload.team];
    }
    return team;
};

export const teamIndexReducer = (teamIndex = {}, action) => {
    if (action.type === 'ADD_MEMBER') {
        const newIndex = cloneDeep(teamIndex);
        newIndex[action.payload.main.id] = true;
        return newIndex;
    } else if (action.type === 'REMOVE_MEMBER') {
        const { [action.payload.main.id]: value, ...newIndex } = teamIndex;
        return newIndex;
    } else if (action.type === 'LOAD_TEAM') {
        return { ...action.payload.teamIndex };
    }
    return teamIndex;
};

export const teamNameReducer = (teamName = '', action) => {
    if (action.type === 'UPDATE_TEAM_NAME') {
        return action.payload;
    } else if (action.type === 'LOAD_TEAM') {
        return action.payload.name;
    }
    return teamName;
};

export const teamsReducer = (teams = [], action) => {
    if (action.type === 'SET_TEAMS') {
        return action.payload;
    } else if (action.type === 'ADD_TEAM') {
        return [...teams, action.payload];
    } else if (action.type === 'DELETE_TEAM') {
        const teamIndex = teams.findIndex(team => team.name === action.payload.name);
        let newTeams = [...teams.slice(0, teamIndex), ...teams.slice(teamIndex + 1)];
        localStorage.setItem('teams', JSON.stringify(newTeams));
        return newTeams;
    }
    return teams;
};
