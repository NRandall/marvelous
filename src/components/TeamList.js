import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import { addTeam } from '../actions';

export const TeamList = ({ team, teams, addTeam, teamIndex }) => {
    const [teamName, setTeamName] = useState('');

    useEffect(() => {
        setTeamName(team.name)
    }, [])

    const renderTeam = team.map((character, i) => {
        return <CharacterCard key={character.main.id} character={character} index={i} imageType="portrait_fantastic" />;
    });

    const onSaveTeam = () => {
        const newTeam = { name: teamName, id: Date.now(), team: [...team], teamIndex };
        if (teams.find((currentTeam) => currentTeam.name === teamName) === undefined) {
            localStorage.setItem('teams', JSON.stringify([...teams, newTeam]));
            addTeam(newTeam);
        }
    };

    const onSaveTeamNameCheck = (e) => {
        if (e.key === 'Enter') {
            onSaveTeam();
        }
    };

    const renderSave = () => {
        return teamName ? (
            <button disabled={!teamName} onClick={onSaveTeam} className="pure-button pure-button-error save-team-button">
                <span className="material-icons">save</span>&nbsp;Save Team
            </button>
        ) : null;
    };

    return team.length ? (
        <div className="text-white">
            <div className="d-flex justify-content-end container pad">
                    <form className="pure-form">
                        <input
                            id="team-input"
                            placeholder="Name Your Team"
                            onKeyPress={onSaveTeamNameCheck}
                            onChange={(e) => setTeamName(e.target.value)}
                            type="text"
                            value={teamName}
                        />
                        {renderSave()}
                    </form>
            </div>
            <div className="team-container">
                <div className="pure-g justify-content-center container">{renderTeam}</div>
            </div>
        </div>
    ) : null;
};

const mapStateToProps = ({ team, teams, teamIndex }) => ({
    team,
    teams,
    teamIndex,
});

const mapDispatchToProps = { addTeam };

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
