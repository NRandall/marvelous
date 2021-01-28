import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';

export const SearchResults = (props) => {
    const renderCharacters = props.characters.map((character, i) => {
        return <CharacterCard key={character.main.id} character={character} index={i} />;
    });

    return <div className="pure-g">{renderCharacters}</div>;
};

const mapStateToProps = ({ characters }) => ({
    characters,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
