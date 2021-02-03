import { combineReducers } from 'redux';
import { teamReducer, teamIndexReducer, teamNameReducer, teamsReducer } from './teamReducer';
import { charactersReducer, selectedCharacterDetailReducer, gettingCharactersReduce } from './characterReducer';
import { teamModalVisibilityReducer, characterModalVisibilityReducer } from './modalReducer';

export default combineReducers({
    team: teamReducer,
    teams: teamsReducer,
    teamName: teamNameReducer,
    teamIndex: teamIndexReducer,
    characters: charactersReducer,
    loading: gettingCharactersReduce,
    selectedCharacterDetail: selectedCharacterDetailReducer,
    teamModalVisibility: teamModalVisibilityReducer,
    characterModalVisibility: characterModalVisibilityReducer,
});
