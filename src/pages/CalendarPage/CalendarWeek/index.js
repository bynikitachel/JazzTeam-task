import React from 'react';
import CalendarDay from "./CalendarDay";


const CalendarWeek = ({week, state, setState,setIsOpenModal,setIsOpenModalNotes}) => {

    const calendarDay = () => {
        return week.map((date, index) => {
            return <CalendarDay
                date={date}
                state={state}
                index={index}
                setState={setState}
                setIsOpenModal={setIsOpenModal}
                setIsOpenModalNotes={setIsOpenModalNotes}
            />
        })
    }
    const renderCalendarDay = calendarDay();

    return (
        <tr className="week">
            {renderCalendarDay}
        </tr>
    )
}

export default CalendarWeek;