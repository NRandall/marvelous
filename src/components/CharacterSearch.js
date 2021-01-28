import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters, setQuery } from '../actions';

export class CharacterSearch extends Component {
    state = {
        query: '',
    };

    onSearchCharacters = (e) => {
        e.preventDefault();
        // this.props.setQuery(e.target.value)
        this.setState({ query: e.target.value });
        this.props.getCharacters(e.target.value);
    };

    render() {
        return (
            <div className="mb-3 text-center text-md-left d-flex flex-col flex-md-row justify-content-around align-items-center">
                {/* create input clear */}
                <h1 className="banner">I Need A Hero!</h1>
                <form className="pure-form pure-form-stacked" onSubmit={this.onSearchCharacters}>
                    <label htmlFor="character-search"><strong>Find</strong> some help!</label>
                    <br/><input id="character-search" className="text-body pure-input-rounded" placeholder="Search for a teammate" onChange={this.onSearchCharacters} value={this.state.query} type="text" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ characters, characterQuery }) => ({
    characters,
    characterQuery,
});

const mapDispatchToProps = {
    getCharacters,
    setQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearch);
