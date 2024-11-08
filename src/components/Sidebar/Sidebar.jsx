import './Sidebar.css';
import { FaStar, FaHome, FaUser } from 'react-icons/fa';
import IconLabelLink from '../IconLabelLink/IconLabelLink';
import MenuButton from '../MenuButton/MenuButton';
import { useState } from 'react';
import {useLocation } from 'react-router-dom';


export default function Sidebar(){
    const [open, setOpen] = useState(false);

    const toggleSidebar = ()=>{
        setOpen(!open)
    }

    const location = useLocation(); 
    const isActive = location.pathname === "/";

        return (
            <>
                <button className='btn-menu' onClick={toggleSidebar}> 
                    <MenuButton /> 
                </button>
                <div className={`sidebar ${open? 'active' : ''}`}>
                    <button className={`addTopic ${isActive? 'background' : ''}`}>
                        +
                    </button> 
                    <IconLabelLink to="/" icon={<FaHome />} label="Home" />
                    <IconLabelLink to="/dialogs" icon={<FaStar />} label="Dialogs" />
                    <IconLabelLink to="/mycopy" icon={<FaUser />} label="MyCopy" />
                    <IconLabelLink to="/something" icon={<FaStar />} label="Something" />
                </div>
            </>
        );
    }

