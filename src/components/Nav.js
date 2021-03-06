import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions';

export const Nav = ({ teamModalVisibility, showModal, teams }) => {
    const onShowTeamModal = e => {
        e.stopPropagation();
        showModal(!teamModalVisibility, 'team');
    };
    return (
        <div id="nav" className="text-white">
            <div className="container pad d-flex align-items-center justify-content-evenly justify-content-between-md pure-g">
                <a
                    href="https://youtu.be/vA48rDXh1_4?t=55"
                    target="_blank"
                    rel="noreferrer"
                    title="Do You?!"
                    className="pure-u-1 pure-u-sm-2-3 text-center text-white text-md-left"
                >
                    <h1 id="banner-text" className="my-0">
                        I Need A Hero!
                    </h1>
                </a>
                <div className="text-right">
                    <button
                        hidden={teams && !teams.length}
                        onClick={onShowTeamModal}
                        className="d-flex align-items-center pure-button pure-button-outline pure-u-1 pure-u-sm-1-3"
                    >
                        <span className="material-icons md-36">people</span> &nbsp;Teams
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ teamModalVisibility, teams }) => ({ teamModalVisibility, teams });

const mapDispatchToProps = { showModal };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
