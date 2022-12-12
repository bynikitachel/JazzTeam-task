import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {formatDate} from "../../utils/date";

import './index.css';


const ProfilePage = () => {
    const isAuthorised = useSelector(({auth}) => auth.isAuthorised);
    const notes = useSelector(({notes}) => notes.notes);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorised) {
            return navigate('/login');
        }
    }, [isAuthorised, navigate])

    const profileData = () => {
        return notes && notes.map((item, index) => {
            return (
                <div className="events-list" key={index}>
                    <span className="event-date">{formatDate(new Date(item.date))}</span>
                    <span>{item.text}</span>
                </div>
            )
        })
    }
    const renderProfileData = profileData();

    return isAuthorised && (
        <>
            <h1>Notes</h1>
            {renderProfileData}
        </>
    )
}

export default ProfilePage;