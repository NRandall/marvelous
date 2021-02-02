import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { buildTeam, buildTeamIndex, buildTeamsReducer } from './teamReducer';
import { characterSearchReducer, selectedCharacterReducer } from './characterReducer';
import { teamModalVisibilityReducer, characterModalVisibilityReducer } from './modalReducer';

export default combineReducers({
    form: formReducer,
    characters: characterSearchReducer,
    team: buildTeam,
    teamIndex: buildTeamIndex,
    selectedCharacterDetail: selectedCharacterReducer,
    teamModalVisibility: teamModalVisibilityReducer,
    characterModalVisibility: characterModalVisibilityReducer,
    teams: buildTeamsReducer,
});
