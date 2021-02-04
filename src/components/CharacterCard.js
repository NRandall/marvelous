import React from 'react';
import { connect } from 'react-redux';
import { setSelectedCharacter, showModal } from '../actions';
import CheckMark from './CheckMark';

export const CharacterCard = ({ teamIndex, setSelectedCharacter, index, character, showModal, imageType }) => {
    const onTeam = teamIndex[character.main.id] !== undefined;
    const onShowCharacterDetails = e => {
        e.stopPropagation();
        setSelectedCharacter(character);
        showModal(true, 'character');
    };

    return (
        <div
            className={`hero-card text-white pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-5 text-center animate__animated animate__fadeIn animate__delay-
            ${index < 5 ? index : 5}s 
            ${onTeam ? 'on-team' : ''}`}
            onClick={onShowCharacterDetails}
            title="Click To See Details"
        >
            <img src={`${character.main.thumbnail.path}/${imageType}.jpg`} alt="" />
            <h3 className="mb-1">{character.name}</h3>
            <p className="card-variant-text" hidden={!character.variants.length}>
                {character.variants.length + 1} variants
            </p>
            <CheckMark active={onTeam} />
        </div>
    );
};

const mapStateToProps = ({ teamIndex }) => ({ teamIndex });

const mapDispatchToProps = {
    setSelectedCharacter,
    showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
