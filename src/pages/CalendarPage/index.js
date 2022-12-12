import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setNote} from "../../store/reducers/notes";
import Button from "../../components/Button";
import * as calendar from "../../utils/calendar";
import CalendarWeek from "../../components/CalendarWeek";
import CreateNoteModal from "../../components/CreateNoteModal";

import './index.css';


const Calendar = ({date = new Date()}) => {

        const isAuthorised = useSelector(({auth}) => auth.isAuthorised);
        const dispatch = useDispatch()
        const [state, setState] = useState({
            date: date, currentDate: new Date(), selectedDate: null,
        });
        const [isOpenModal, setIsOpenModal] = useState(false);

        const monthData = calendar.getMonthData(state.date.getFullYear(), state.date.getMonth());

        const calendarData = {
            years: [2022, 2023],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
            weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }


        const calendarDate = () => {
            const month = state.date.getMonth();
            return `${state.date.getFullYear()} ${calendarData.months[month]}`;
        }
        const renderCalendarDate = calendarDate();

        const calendarWeekDays = () => {
            return calendarData.weekDays.map(name =>
                <th key={name}>{name}</th>
            )
        }
        const renderWeekDays = calendarWeekDays();


        const handlePrevButtonClick = () => {
            const date = new Date(state.date.getFullYear(), state.date.getMonth() - 1);
            setState({date});
        }

        const handleNextButtonClick = () => {
            const date = new Date(state.date.getFullYear(), state.date.getMonth() + 1);
            setState({date});
        }


        const handleAddEvent = (noteText) => {
            const date = state.selectedDate
            dispatch(setNote({date: date, text: noteText}))
            setIsOpenModal(false)
        }

        const month = () => monthData.map((week, index) => (<CalendarWeek
                key={index}
                week={week}
                state={state}
                setState={setState}
                setIsOpenModal={setIsOpenModal}
            />)
        )
        const renderMonth = month();

        return isAuthorised && (
            <div className={isOpenModal ? "blur" : ""}>
                {isOpenModal &&
                    <CreateNoteModal handleAddEvent={handleAddEvent} handleCancelModal={setIsOpenModal}/>}
                <div className="calendar">
                    <h1>Calendar</h1>
                    <header>
                        <div className="control-panel">
                            <div className="buttons-container">
                            </div>
                            <input
                                className="search"
                                placeholder="search..."
                            />
                        </div>
                        <div className="months-navigation">
                            <Button
                                buttonText="<"
                                onClick={handlePrevButtonClick}
                            />
                            <div className="calendar-date">
                                {renderCalendarDate}
                            </div>
                            <Button
                                buttonText=">"
                                onClick={handleNextButtonClick}
                            />
                        </div>
                    </header>
                    <table className="calendar-body">
                        <thead className="week-days">
                        <tr>
                            {renderWeekDays}
                        </tr>
                        </thead>
                        <tbody>
                            {renderMonth}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
;

export default Calendar;