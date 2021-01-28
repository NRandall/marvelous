import React from 'react';
import { connect } from 'react-redux';
import 'animate.css';
import CharacterSearch from './CharacterSearch';
import SearchResults from './SearchResults';
import './App.css';
// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

export const App = (props) => {
    return (
        <div className="container pad">
            {/* <iframe src="https://app.showit.co/demo" width={vw} height={vh}></iframe> */}
            <CharacterSearch />
            <SearchResults />
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
