import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/tennispro/grip">握把皮</Link>
            <Link to="/tennispro/tennis-string">網球線</Link>
            <Link to="/tennispro/badminton-string">羽球線</Link>
        </div>
    );
};

export default sidebar;