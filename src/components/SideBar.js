import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/greentiger-logo.png" alt="Green Tiger Logo" />
                <h2>GREEN TIGER</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/live-location">Live Location</Link></li>
                    <li><Link to="/remote-lock">Remote Lock</Link></li>
                    <li><Link to="/trips">Trips</Link></li>
                </ul>
            </nav>
            <div className="user-info">
                <p>Okaya</p>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;
