import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import TablePage from "./pages/TablePage";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import CalendarPage from "./pages/CalendarPage";

import './App.css';


const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/info" element={<InfoPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/table" element={<TablePage/>}/>
                    <Route path="/calendar" element={<CalendarPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
