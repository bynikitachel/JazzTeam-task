import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNote } from '../../store/reducers/notes'
import Button from '../../components/Button'
import * as calendar from '../../utils/calendar'
import CalendarWeek from '../../components/CalendarWeek'
import CreateNoteModal from '../../components/CreateNoteModal'

import './index.css'
import { useNavigate } from 'react-router-dom'

const CALENDAR_DATA = {
  years: [2022, 2023],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const Calendar = ({ date = new Date() }) => {
  const isAuthorised = useSelector(({ auth }) => auth.isAuthorised)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = useState({
    date: date,
    currentDate: new Date(),
    selectedDate: null,
  })
  const [isOpenModal, setIsOpenModal] = useState(false)

  const monthData = calendar.getMonthData(state.date.getFullYear(), state.date.getMonth())

  useEffect(() => {
    if (!isAuthorised) {
      return navigate('/')
    }
  }, [isAuthorised, navigate])

  const calendarDate = () => {
    const month = state.date.getMonth()
    return `${state.date.getFullYear()} ${CALENDAR_DATA.months[month]}`
  }
  const renderCalendarDate = calendarDate()

  const calendarWeekDays = () => {
    return CALENDAR_DATA.weekDays.map((name) => <th key={name}>{name}</th>)
  }
  const renderWeekDays = calendarWeekDays()

  const handlePrevButtonClick = () => {
    const date = new Date(state.date.getFullYear(), state.date.getMonth() - 1)
    setState({ date })
  }

  const handleNextButtonClick = () => {
    const date = new Date(state.date.getFullYear(), state.date.getMonth() + 1)
    setState({ date })
  }

  const handleAddEvent = (noteText) => {
    const date = state.selectedDate
    dispatch(setNote({ date: date, text: noteText }))
    setIsOpenModal(false)
  }

  const month = () =>
    monthData.map((week, index) => (
      <CalendarWeek key={index} week={week} state={state} setState={setState} setIsOpenModal={setIsOpenModal} />
    ))
  const renderMonth = month()

  return (
      <div>
        {isOpenModal && <CreateNoteModal handleAddEvent={handleAddEvent} handleCancelModal={setIsOpenModal} />}
        <div className="calendar">
          <h1>Calendar</h1>
          <div className="months-navigation">
            <Button buttonText="<" onClick={handlePrevButtonClick} />
            <div className="calendar-date">{renderCalendarDate}</div>
            <Button buttonText=">" onClick={handleNextButtonClick} />
          </div>
          <table className="calendar-body">
            <thead className="week-days">
              <tr>{renderWeekDays}</tr>
            </thead>
            <tbody>{renderMonth}</tbody>
          </table>
        </div>
      </div>
  )
}
export default Calendar
