import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { allCharacterReducer, characterQuery, buildTeam, buildTeamIndex } from './characterReducer';

export default combineReducers({
    form: formReducer,
    characters: allCharacterReducer,
    characterQuery,
    team: buildTeam,
    teamIndex: buildTeamIndex
});
