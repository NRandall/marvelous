import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';

export const SearchResults = (props) => {
    const renderCharacters = props.characters.map((character, i) => {
        return <CharacterCard key={character.main.id} character={character} index={i} imageType="standard_medium" />;
    });

    return (
        <div id="search-results" className="pure-g container">
            {renderCharacters}
        </div>
    );
};

const mapStateToProps = ({ characters }) => ({
    characters,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
