import { combineReducers } from 'redux';
import { teamReducer, teamIndexReducer, teamNameReducer, teamsReducer, teamChangedStatusReducer, newTeamStatusReducer } from './teamReducer';
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
    teamTouched: teamChangedStatusReducer,
    isNewTeam: newTeamStatusReducer,
});
