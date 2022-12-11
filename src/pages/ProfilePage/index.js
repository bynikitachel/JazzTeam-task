import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {useSelector} from "react-redux";

import './index.css';
import {formatDate} from "../../utils/date";


const ProfilePage = () => {
    const isAuthorised = useSelector(({auth}) => auth.isAuthorised);
    const notes = useSelector(({notes}) => notes.notes);
    console.log(notes)

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorised) {
            return navigate('/login');
        }
    }, [isAuthorised, navigate])

    return isAuthorised && (
        <>
            <h1>Welcome to your profile page!</h1>
            {notes && notes.map((item,index)=>{
                return(
                    <div key={index}>
                        <span>{formatDate(new Date(item.date))}</span>
                        <span>{item.text}</span>
                    </div>
                    )
            })}
        </>
    )
}

export default ProfilePage;