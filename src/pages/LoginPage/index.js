import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setAuth} from "../../store/reducers/auth";
import InvalidAuth from '../../components/InvalidAuth';

import './index.css';


const ADMIN = {name: 'Admin', password: '12345678'};


const LoginPage = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (userName === ADMIN.name && password === ADMIN.password){
            dispatch(setAuth(true));
            navigate('/profile');
        } else {
            setIsInvalid(true);
        }
    };

    return (
        <div className='form-container'>
            <div className='inputs-container'>
                <h1>Admin</h1>
                <input
                    type='text'
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username'
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                />
                {isInvalid && <InvalidAuth />}
            </div>
            <button
                className='form-button'
                onClick={() => handleLogin()}
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage;