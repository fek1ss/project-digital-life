import Home  from './pages/Home/Home.jsx';
import MyCopy from './pages/MyCopy/MyCopy.jsx';
import Sidebar  from './components/Sidebar/Sidebar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dialogs from "./pages/Dialogs/Dialogs.jsx";
import Registration from './pages/Registration/Registration.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';


export default function App() {
    return (
        <>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ width: '100%'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/mycopy" element={<MyCopy />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/signIn" element={<SignIn />} />
                </Routes>
            </div>
        </div>
        </>
    );
}

