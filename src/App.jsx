import Home  from './pages/Home/Home.jsx';
import MyCopy from './pages/MyCopy/MyCopy.jsx';
import Sidebar  from './components/Sidebar/Sidebar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dialogs from "./pages/Dialogs/Dialogs.jsx";


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
                </Routes>
            </div>
        </div>
        </>
    );
}

