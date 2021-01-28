import React from 'react';

export default function CheckMark(props) {
    return (
        <div>
            <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 488.878 488.878"
                space="preserve"
            >
                <polygon className={props.active ? 'active' : ''} points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298" />
            </svg>
        </div>
    );
}
