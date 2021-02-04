import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { addMember, removeMember, setSelectedCharacter, showModal } from '../actions';

export const StatModal = ({ selected, addMember, removeMember, teamIndex, showModal }) => {
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = e => {
            if (ref.current && ref.current.contains(e.target)) return;
            else showModal(false, 'character');
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, [showModal]);

    const renderVariants = () => {
        if (selected.variants) {
            return selected.variants.map(variant => {
                return <li key={variant.id}>{variant.name}</li>;
            });
        }
        return null;
    };

    const clearSearch = () => {
        showModal(false, 'character');
    };

    const onTeam = teamIndex[selected.main.id] !== undefined;

    const description = () => {
        if (selected.main.description) return selected.main.description;
        else {
            const secondaryDescription = selected.variants.find(variant => variant.description !== '');
            if (secondaryDescription) return secondaryDescription.description;
        }
        return `We don't have any description for this person, but don't let that stop you from choosing them! ${
            selected.main.thumbnail.path.endsWith('not_available') ? '' : "I mean look at that face! C'mon!"
        }`;
    };

    const onToggleMember = () => {
        if (!onTeam) {
            addMember(selected);
        } else {
            removeMember(selected);
        }
        clearSearch();
    };

    return (
        <div className="modal-overlay">
            <div className="modal" ref={ref}>
                <div className="modal-head">
                    <h2>Details for {selected.name}</h2>
                    <button onClick={() => clearSearch()} className="pure-button d-flex align-items-center">
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <hr />
                <div className="modal-body pure-g">
                    <div className="pure-u-1 pure-u-md-1-3 text-center">
                        <img className="pure-img" src={`${selected.main.thumbnail.path}/portrait_uncanny.jpg`} alt={`${selected.name} portrait`} />
                    </div>
                    <div className="pure-u-1 pure-u-md-2-3 d-flex flex-col">
                        <h1 className="stat-head text-center text-md-left">{selected.main.name}</h1>
                        <div className="accent"></div>
                        <p className="mb-3">{description()}</p>
                        <div className="appearance-stats">
                            <div className="appearance-stat">
                                <span>{selected.main.comics.available}</span> <br />
                                Comic{selected.main.comics.available === 1 ? '' : 's'}
                            </div>
                            <div className="appearance-stat">
                                <span>{selected.main.series.available}</span> <br />
                                Serie{selected.main.series.available === 1 ? '' : 's'}
                            </div>
                            <div className="appearance-stat">
                                <span>{selected.main.stories.available}</span> <br />
                                Storie{selected.main.stories.available === 1 ? '' : 's'}
                            </div>
                            <div className="appearance-stat">
                                <span>{selected.main.events.available}</span> <br />
                                Event{selected.main.events.available === 1 ? '' : 's'}
                            </div>
                        </div>
                    </div>
                    <div hidden={selected.variants.length === 0} className="pure-u-1 variant-list">
                        <h1>Variants</h1>
                        <ul>{renderVariants()}</ul>
                    </div>
                </div>
                <hr />
                <div className="modal-footer">
                    <button
                        onClick={onToggleMember}
                        className={`pure-button ${onTeam ? 'pure-button-error' : 'pure-button-primary'}`}
                        title="Add this hero to your team"
                    >
                        {onTeam ? `Kick ${selected.name} off the team!` : `Recruit ${selected.name} to my team!`}
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ selectedCharacterDetail, characterModalVisibility, teamIndex }) => ({
    selected: selectedCharacterDetail,
    characterModalVisibility,
    teamIndex,
});

const mapDispatchToProps = { addMember, removeMember, setSelectedCharacter, showModal };

export default connect(mapStateToProps, mapDispatchToProps)(StatModal);
