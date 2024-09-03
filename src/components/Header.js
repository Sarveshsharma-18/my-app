import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <input type="text" placeholder="Search Devices" className="search-bar" />
            <div className="date-pickers">
                <label>
                    Start Date
                    <input type="date" />
                </label>
                <label>
                    End Date
                    <input type="date" />
                </label>
            </div>
        </header>
    );
};

export default Header;
