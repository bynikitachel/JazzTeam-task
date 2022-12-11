import React from 'react';

import './index.css';

const NotesModal = ({notes,handleClose}) => {

    return (
        <div className="notes-modal">
            <ul className={'notes-list'}>
                {notes.map((item) => (
                    <li className="notes">{item.text}</li>
                ))}
            </ul>
            <button className="close" onClick={handleClose}>Close</button>
        </div>
    );
};

export default NotesModal;