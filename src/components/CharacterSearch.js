import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters, gettingSearch } from '../actions';

export class CharacterSearch extends Component {
    state = {
        query: '',
    };

    onSubmitSearch = e => {
        if (e && e.key === 'Enter') {
            e.preventDefault();
        }

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
                <div className="pure-u-1 pure-u-md-3-5 mx-auto">
                    <p className="text-center">Search a broad selection of Marvel&trade; characters to create the perfect team for any situation.</p>
                    <form className="pure-form text-center" onSubmit={e => e.preventDefault()}>
                        <input
                            id="character-search"
                            className="text-body text-center mb-0"
                            placeholder="Search for a teammate"
                            onChange={this.onSearchCharacters}
                            onKeyPress={this.onSubmitSearch}
                            onFocus={event => event.target.select()}
                            value={this.state.query}
                            type="text"
                            title="Search For Teammates To Recruit"
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
