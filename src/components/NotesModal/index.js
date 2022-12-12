import React from 'react';

import './index.css';

const NotesModal = ({notes,handleClose}) => {

    return (
        <div className="notes-modal">
            <h1>Notes</h1>
            <ul className={'notes-list'}>
                {notes.map((item,index) => (
                    <li className="notes" key={index}>{item.text}</li>
                ))}
            </ul>
            <button className="close" onClick={handleClose}>Close</button>
        </div>
    );
};

export default NotesModal;