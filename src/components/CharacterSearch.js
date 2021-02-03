import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters, gettingSearch } from '../actions';

export class CharacterSearch extends Component {
    state = {
        query: '',
    };

    onSubmitSearch = e => {
        if (e) e.preventDefault();
        this.props.getCharacters(this.state.query);
    };

    onSearchCharacters = e => {
        this.setState({ query: e.target.value });
        this.props.getCharacters(e.target.value);
        this.props.gettingSearch('Searching...');
    };

    render() {
        return (
            <div className="my-3 pure-g text-white container pad">
                <div className="pure-u-1 pure-u-md-1-2 mx-auto">
                    <p class="text-center">
                        Search a broad selection of Marvel&trade; characters to create the perfect team for any
                        situation.
                    </p>
                    <form className="pure-form text-center" onSubmit={this.onSubmitSearch}>
                        <input
                            id="character-search"
                            className="text-body text-center"
                            placeholder="Search for a teammate"
                            onChange={this.onSearchCharacters}
                            onFocus={event => event.target.select()}
                            value={this.state.query}
                            type="text"
                        />
                        <button
                            hidden={this.state.query === ''}
                            onClick={() => this.setState({ query: '' }, this.onSubmitSearch)}
                            title="Clear Search"
                            className="link-button pure-button"
                        >
                            Clear
                        </button>
                    </form>
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
    gettingSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearch);
