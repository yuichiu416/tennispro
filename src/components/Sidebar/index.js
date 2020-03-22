import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="grip">握把皮</Link>
        </div>
    );
};

export default sidebar;