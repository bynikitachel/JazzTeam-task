import React from 'react'

import './index.css'

const NotesModal = ({ notes, handleClose }) => {
  const modalNotes = () =>
    notes.map((item, index) => (
      <li className="notes" key={index}>
        {item.text}
      </li>
    ))
  const renderNotes = modalNotes()

  return (
    <div className="notes-modal">
      <h1>Notes</h1>
      <ul className='notes-list'>{renderNotes}</ul>
      <button className="close" onClick={handleClose}>
        Close
      </button>
    </div>
  )
}

export default NotesModal
