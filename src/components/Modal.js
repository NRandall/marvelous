import React, { useEffect, useRef } from 'react';

export default function Modal({ body, footer, hideCallback }) {
    const ref = useRef();

    const hideModal = () => {
        if (hideCallback) {
            hideCallback();
        } else return null;
    };

    useEffect(() => {
        const onBodyClick = e => {
            if (ref.current && ref.current.contains(e.target)) return;
            else {
                hideModal();
            }
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, [hideModal]);

    return (
        <div className="modal-overlay">
            <div className="modal" ref={ref}>
                <div className="modal-head">
                    <button onClick={() => hideModal()} className="pure-button d-flex align-items-center">
                        Close<span className="material-icons">close</span>
                    </button>
                </div>
                <hr />
                <div>{body}</div>
                <hr />
                <div className="modal-footer">{footer}</div>
            </div>
        </div>
    );
}
