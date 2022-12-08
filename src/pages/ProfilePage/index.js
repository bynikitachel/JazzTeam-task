import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {useSelector} from "react-redux";

import './index.css';


const ProfilePage = () => {

    const isAuthorised = useSelector(({isAuthorised}) => isAuthorised);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorised) {
            return navigate('/login');
        }
    }, [isAuthorised, navigate])

    return isAuthorised && (
        <>
            <h1>Welcome to your profile page!</h1>
        </>
    )
}

export default ProfilePage;