import { cloneDeep } from 'lodash';

export const teamReducer = (team = [], action) => {
    if (action.type === 'ADD_MEMBER') {
        return [...team, action.payload];
    } else if (action.type === 'REMOVE_MEMBER') {
        const foundIndex = team.findIndex(character => character.main.id === action.payload.main.id);
        return [...team.slice(0, foundIndex), ...team.slice(foundIndex + 1)];
    } else if (action.type === 'LOAD_TEAM') {
        return [...action.payload.team];
    } else if (action.type === 'DELETE_TEAM') {
        return [];
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
    } else if (action.type === 'DELETE_TEAM') {
        return {};
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
        return action.payload.teams;
    } else if (action.type === 'DELETE_TEAM') {
        const teamIndex = teams.findIndex(team => team.name === action.payload.name);
        let newTeams = [...teams.slice(0, teamIndex), ...teams.slice(teamIndex + 1)];
        localStorage.setItem('teams', JSON.stringify(newTeams));
        return newTeams;
    }
    return teams;
};

export const teamChangedStatusReducer = (dirty = false, action) => {
    if (action.type === 'UPDATE_TEAM_NAME' || action.type === 'ADD_MEMBER' || action.type === 'REMOVE_MEMBER') {
        return true;
    } else if (action.type === 'SET_TEAMS') {
        return false;
    }
    return dirty;
};

export const newTeamStatusReducer = (isNewTeam = true, action) => {
    if (action.type === 'SET_TEAMS' && !action.payload.onLoad) {
        return false;
    }
    return isNewTeam;
};
