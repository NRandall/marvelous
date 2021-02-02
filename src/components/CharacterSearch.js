import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../actions';

export class CharacterSearch extends Component {
    state = {
        query: '',
    };

    onSubmitSearch = (e) => {
        if (e) e.preventDefault();
        this.props.getCharacters(this.state.query);
    };

    onSearchCharacters = (e) => {
        this.setState({ query: e.target.value });
        this.props.getCharacters(e.target.value);
    };

    render() {
        return (
            <div className="my-3 text-center text-md-left pure-g flex-col flex-md-row justify-content-between align-items-center text-white container">
                <p className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                    Search a broad selection of Marvel&trade; characters to create the perfect team for any situation.
                </p>

                <div className="search-container pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 d-flex justify-content-end">
                    <form className="pure-form pure-form-stacked ml-auto" onSubmit={this.onSubmitSearch}>
                        <label htmlFor="character-search">
                            <span className="material-icons">person_search</span> &nbsp;Find some <strong>help!</strong>
                        </label>
                        <input
                            id="character-search"
                            className="text-body pure-input-rounded"
                            placeholder="Search for a teammate"
                            onChange={this.onSearchCharacters}
                            onFocus={(event) => event.target.select()}
                            value={this.state.query}
                            type="text"
                        />
                    </form>
                    <button
                        hidden={this.state.query === ''}
                        onClick={() => this.setState({ query: '' }, this.onSubmitSearch)}
                        title="Clear Search"
                        className="pure-button"
                        id="clear-search"
                    >
                        <span className="material-icons">close</span>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ characters }) => ({
    characters,
});

const mapDispatchToProps = {
    getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearch);
