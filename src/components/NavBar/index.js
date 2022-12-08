import {NavLink, Link} from 'react-router-dom';
import Button from "../Button";
import './index.css';

const NavBar = () => {

    return (
        <div className='navigation'>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/info">Info</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/table">Table</NavLink></li>
            </ul>
            <div className='container-log'>
                <div className='user-part'>
                    <Link to="/profile">Admin</Link>
                </div>
                <Button
                    className="auth-button"
                    buttonText="button"
                />
            </div>
        </div>
    );
}

export default NavBar;