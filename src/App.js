import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import TablePage from "./pages/TablePage";

import './App.css';


const App = () => {
    return (
        <>
            <NavBar/>
            <div className='container'>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/table" element={<TablePage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
