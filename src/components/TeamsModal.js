import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { showModal, loadTeam, deleteTeam } from '../actions';

export const TeamModal = ({ teams, showModal, loadTeam, deleteTeam }) => {
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = e => {
            if (ref.current && ref.current.contains(e.target)) return;
            else showModal(false, 'team');
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, [showModal, teams]);

    const renderTeamDetails = ({ team, id }) => {
        return team.map(character => {
            return <div key={`${character.name}${id}`}>{character.name}</div>;
        });
    };

    const onDeleteTeam = team => {
        if (window.confirm('Are you sure?!')) {
            deleteTeam(team);
        } else window.alert('Phew... that was close.');
    };

    const onLoadTeam = team => {
        loadTeam(team);
        showModal(false, 'team');
    };

    const renderTeams = () => {
        return teams.length ? (
            teams.map(team => {
                return (
                    <div
                        key={team.id}
                        className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pad saved-team text-center d-flex flex-col"
                    >
                        <h2 className="mb-1">{team.name.toUpperCase()}</h2>
                        <hr className="mb-2" style={{ width: '100%' }} />
                        <div className="d-flex flex-col my-1">
                            <div className="mb-1">{renderTeamDetails(team)}</div>
                        </div>
                        <button
                            className="pure-button pure-button-error mt-auto d-flex justify-content-center align-items-end"
                            onClick={() => onDeleteTeam(team)}
                        >
                            <span className="material-icons">delete_outline</span> &nbsp; Delete Team
                        </button>
                        <button
                            className="pure-button pure-button-primary d-flex justify-content-center align-items-end my-1"
                            onClick={() => onLoadTeam(team)}
                        >
                            <span className="material-icons">folder_open</span> &nbsp; Load Team
                        </button>
                    </div>
                );
            })
        ) : (
            <div>You have no saved teams! Go! Create!</div>
        );
    };
    return (
        <div className="modal-overlay">
            <div className="modal" ref={ref}>
                <div className="modal-head">
                    <h3 className="my-0">Your Saved Teams</h3>
                    <button onClick={() => showModal(false, 'team')} className="pure-button d-flex align-items-center">
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <hr />
                <div className="modal-body pure-g d-flex justify-content-around">{renderTeams()}</div>
                <hr />
                <div className="modal-footer">
                    <button
                        onClick={() => showModal(false, 'team')}
                        className="pure-button pure-button-primary"
                        title="Add this hero to your team"
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ teams }) => ({
    teams,
});

const mapDispatchToProps = { showModal, loadTeam, deleteTeam };

export default connect(mapStateToProps, mapDispatchToProps)(TeamModal);
