import { debounce } from 'lodash';
import marvel from '../api/marvel';

const searchForCharacterAsync = debounce((dispatch, query) => {
    if (query !== undefined && query.trim() !== '') {
        marvel
            .get('/v1/public/characters', {
                params: {
                    nameStartsWith: query,
                },
            })
            .then(res => {
                dispatch({
                    type: 'GET_CHARACTERS',
                    payload: res.data,
                });
            })
            .catch(err => {
                console.error(err);
            });
    } else {
        dispatch({
            type: 'GET_CHARACTERS',
            payload: 'reset',
        });
    }
}, 300);

export const getCharacters = query => dispatch => searchForCharacterAsync(dispatch, query);

export const addMember = character => {
    return {
        type: 'ADD_MEMBER',
        payload: character,
    };
};

export const removeMember = character => {
    return {
        type: 'REMOVE_MEMBER',
        payload: character,
    };
};

export const setSelectedCharacter = character => {
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

export const setTeams = (teams, onLoad) => {
    return {
        type: 'SET_TEAMS',
        payload: { teams, onLoad },
    };
};

export const loadTeam = team => {
    return {
        type: 'LOAD_TEAM',
        payload: team,
    };
};

export const deleteTeam = team => {
    return {
        type: 'DELETE_TEAM',
        payload: team,
    };
};

export const setTeamName = name => {
    return {
        type: 'UPDATE_TEAM_NAME',
        payload: name,
    };
};

export const gettingSearch = status => {
    return {
        type: 'GETTING_SEARCH',
        payload: status,
    };
};
