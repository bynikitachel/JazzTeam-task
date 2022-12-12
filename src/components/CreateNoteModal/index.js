import React, {useState} from 'react';
import Button from "../Button";

import './index.css';

const CreateNoteModal = ({editingNote = '', handleAddEvent, handleCancelModal}) => {

    const [textNote, setTextNote] = useState(editingNote);

    return (
        <div className="create-note-modal">
            <textarea
                value={textNote}
                onChange={e => setTextNote(e.target.value)}
            ></textarea>
            <div className='modal-buttons-container'>
                <Button
                    buttonText='Cancel'
                    onClick={() => handleCancelModal(false)}
                />
                <Button
                    buttonText='Done'
                    onClick={() => handleAddEvent(textNote)}
                />
            </div>
        </div>
    );
};

export default CreateNoteModal;