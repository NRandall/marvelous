import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMember } from '../actions';
import CheckMark from './CheckMark'

export const CharacterCard = (props) => {
    const [hovered, setHovered] = useState(false);

    const toggleHover = () => setHovered(!hovered);

    const onAddMember = () => {
        if (!props.teamIndex[props.character.main.id]) {
            props.addMember(props.character);
        }
    };

    return (
        <div
            className={`hero-card pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-5 text-center animate__animated animate__fadeInUp animate__delay-
            ${props.index < 5 ? props.index : 5}s 
            ${hovered ? 'hovered' : ''} 
            ${props.teamIndex[props.character.main.id] ? 'on-team' : ''}`}
            onClick={onAddMember}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <img src={`${props.character.main.thumbnail.path}/portrait_medium.jpg`} alt="" />
            <h3>{props.character.name}</h3>
            <p hidden={!props.character.variants.length}>{props.character.variants.length + 1} variants</p>
            <CheckMark active={props.teamIndex[props.character.main.id]} />
        </div>
    );
};

const mapStateToProps = ({ team, teamIndex }) => ({ team, teamIndex });

const mapDispatchToProps = {
    addMember,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
