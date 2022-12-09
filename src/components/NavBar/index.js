import {NavLink, useNavigate} from 'react-router-dom';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import Button from "../Button";
import {setAuth} from "../../store/reducers/auth";

import avatar from '../../img/avatar.png'

const NavBar = () => {
    const isAuthorised = useSelector(({isAuthorised}) => isAuthorised);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const buttonText = isAuthorised ? 'Log out' : 'login';


    const handleUser = () => {
        navigate('/profile')
    }

    const handleAuth = () => {
        if (!isAuthorised) {
            navigate('/login');
        } else {
            dispatch(setAuth(false))
        }
    }

    return (
        <div className='navigation'>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/info">Info</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                {isAuthorised && <li><NavLink to="/table">Table</NavLink></li>}
            </ul>
            <div className='auth-container'>
                {isAuthorised &&
                    <button
                        className='user'
                        onClick={handleUser}
                    >
                        <img src={avatar} width='20px' height='20px' alt="username"/>
                        <div>Admin</div>
                    </button>
                }
                <Button
                    buttonText={buttonText}
                    onClick={handleAuth}
                />
            </div>
        </div>
    );
}

export default NavBar;