import React, { useState } from 'react'
import classnames from 'classnames'
import * as calendar from '../../../utils/calendar'
import { useSelector } from 'react-redux'
import NotesModal from '../../NotesModal'
import Button from '../../Button'

const CalendarDay = ({ state, setState, date, index, setIsOpenModal }) => {
    const notes = useSelector(({ notes }) =>
        notes.notes.filter((e) => {
            return calendar.areEqual(new Date(e.date), date)
        })
    )
    const [isOpenModalNotes, setIsOpenModalNotes] = useState(false)

    const handleDayDoubleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (!date) {
            return
        }
        setState((state) => ({
            ...state,
            selectedDate: date,
        }))
        setIsOpenModal(true)
    }

    const handleDayClick = () => {
        setIsOpenModalNotes(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsOpenModalNotes(false)
    }

    const day = () => {
        return date ? (
            <td
                className={classnames('day', {
                    today: calendar.areEqual(date, state.currentDate),
                    selected: calendar.areEqual(date, state.selectedDate),
                })}
                key={index}
                onClick={() => handleDayClick(date)}
            >
                <div>{date.getDate()}</div>
                <Button
                    className="add-button"
                    buttonText={'+'}
                    onClick={handleDayDoubleClick}
                />
                <div>
                    <p>notes: {notes.length}</p>
                </div>
                {isOpenModalNotes && !!notes.length && (
                    <NotesModal notes={notes} handleClose={handleClose} />
                )}
            </td>
        ) : (
            <td key={index} />
        )
    }
    const renderDay = day()

    return <>{renderDay}</>
}

export default CalendarDay
