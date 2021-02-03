import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'animate.css';

import Nav from './Nav';
import TeamList from './TeamList';
import CharacterSearch from './CharacterSearch';
import SearchResults from './SearchResults';
import StatModal from './StatModal';
import TeamsModal from './TeamsModal';
import { setTeams } from '../actions';
import '../css/App.css';

export const App = ({ teamModalVisibility, characterModalVisibility, selectedCharacterDetail, setTeams }) => {
    useEffect(() => {
        const teams = JSON.parse(localStorage.getItem('teams'));
        if (teams !== null) {
            setTeams(teams);
        }
    }, [setTeams]);
    const renderCharacterModal = () => {
        return characterModalVisibility && selectedCharacterDetail ? <StatModal /> : null;
    };
    const renderTeamModal = () => {
        return teamModalVisibility ? <TeamsModal /> : null;
    };
    return (
        <div>
            <Nav />
            <TeamList />
            <CharacterSearch />
            <SearchResults />
            {renderCharacterModal()}
            {renderTeamModal()}
        </div>
    );
};

const mapStateToProps = ({ teamModalVisibility, characterModalVisibility, selectedCharacterDetail }) => ({
    teamModalVisibility,
    characterModalVisibility,
    selectedCharacterDetail,
});

const mapDispatchToProps = { setTeams };

export default connect(mapStateToProps, mapDispatchToProps)(App);
