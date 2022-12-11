import './index.css';

const MainPage = () => {

    return (
        <div className='container-main'>
            <h1>This application contains five pages:</h1>
            <ul className='main-list'>
                <li className='list-item'>Main page - contains descriptions all pages</li>
                <li className='list-item'>Info page - information about this application</li>
                <li className='list-item'>Profile page - information about user</li>
                <li className='list-item'>Login page - to enter the profile</li>
                <li className='list-item'>Register page - to register in the application</li>
                <li className='list-item'>Table page - table with different information</li>
            </ul>
        </div>
    );
}

export default MainPage;