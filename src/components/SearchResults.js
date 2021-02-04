import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';

export const SearchResults = ({ characters, loading }) => {
    const renderCharacters = () => {
        if (!loading)
            return characters.map((character, i) => {
                return <CharacterCard key={character.main.id} character={character} index={i} imageType="standard_medium" />;
            });
        else
            return (
                <div className="text-white pure-u-1 text-center loading-text">
                    <h1>{loading}</h1>
                </div>
            );
    };

    return (
        <div id="search-results" className="pure-g container d-flex justify-content-center w-100">
            {renderCharacters()}
        </div>
    );
};

const mapStateToProps = ({ characters, loading }) => ({
    characters,
    loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
