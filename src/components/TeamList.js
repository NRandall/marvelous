import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import { setTeamName, setTeams } from '../actions';

export const TeamList = ({ team, teams, teamIndex, teamName, setTeamName, setTeams, teamTouched, isNewTeam }) => {
    const renderTeam = team.map((character, i) => {
        return <CharacterCard key={character.main.id} character={character} index={i} imageType="portrait_fantastic" />;
    });

    const onSaveTeam = e => {
        const newTeam = { name: teamName, id: Date.now(), team: [...team], teamIndex };
        const existingTeamIndex = teams.findIndex(team => team.name === teamName);
        let newTeams = teams.slice();
        if (~existingTeamIndex) newTeams[existingTeamIndex] = newTeam;
        else newTeams.push(newTeam);
        localStorage.setItem('teams', JSON.stringify(newTeams));
        setTeams(newTeams);
    };

    const onSaveTeamNameCheck = e => {
        if (e.key === 'Enter') {
            onSaveTeam();
        }
    };

    const renderTeamName = () => {
        return isNewTeam ? (
            <input
                id="team-input"
                placeholder="Name Your Team"
                onKeyPress={onSaveTeamNameCheck}
                onChange={e => setTeamName(e.target.value)}
                type="text"
                value={teamName}
            />
        ) : (
            <h1 className="my-0">{teamName}</h1>
        );
    };

    const renderSave = () => {
        return teamName && teamTouched ? (
            <button disabled={!teamName} onClick={onSaveTeam} className="pure-button pure-button-error save-team-button">
                <span className="material-icons">save</span>&nbsp;Save Team
            </button>
        ) : null;
    };

    return team.length ? (
        <div className="text-white">
            <div className="d-flex justify-content-end container pad">
                <form className="pure-form d-flex" onSubmit={e => e.preventDefault()}>
                    {renderTeamName()}
                    {renderSave()}
                </form>
            </div>
            <div className="team-container">
                <div className="pure-g justify-content-center container">{renderTeam}</div>
            </div>
        </div>
    ) : null;
};

const mapStateToProps = ({ team, teams, teamIndex, teamName, teamTouched, isNewTeam }) => ({
    team,
    teams,
    teamIndex,
    teamName,
    teamTouched,
    isNewTeam,
});

const mapDispatchToProps = { setTeamName, setTeams };

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
