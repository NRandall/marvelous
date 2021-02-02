import { debounce } from 'lodash';
import marvel from '../api/marvel';

// Gets a list of characters based on user query (matches start of name)
const searchForCharacterAsync = debounce(async (dispatch, query) => {
    const res = await marvel.get('/v1/public/characters', {
        params: {
            nameStartsWith: query,
        },
    });

    dispatch({
        type: 'GET_CHARACTERS',
        payload: res.data,
    });
}, 500);

// Calls the debounced character api function
export const getCharacters = (query) =>
    query !== undefined && query.trim() !== ''
        ? (dispatch) => searchForCharacterAsync(dispatch, query)
        : {
              type: 'GET_CHARACTERS',
              payload: 'reset',
          };

export const addMember = (character) => {
    return {
        type: 'ADD_MEMBER',
        payload: character,
    };
};

export const removeMember = (character) => {
    return {
        type: 'REMOVE_MEMBER',
        payload: character,
    };
};

export const setSelectedCharacter = (character) => {
    return {
        type: 'SET_SELECTED_CHARACTER',
        payload: character,
    };
};

export const showModal = (visibility, modalName) => {
    return {
        type: 'SHOW_MODAL',
        payload: { visibility, modalName },
    };
};

export const setTeams = (teams) => {
    return {
        type: 'SET_TEAMS',
        payload: teams,
    };
};

export const addTeam = (team) => {
    return {
        type: 'ADD_TEAM',
        payload: team,
    };
};

export const loadTeam = (team) => {
    return {
        type: 'LOAD_TEAM',
        payload: team,
    };
};

export const deleteTeam = (team) => {
    return {
        type: 'DELETE_TEAM',
        payload: team,
    };
};