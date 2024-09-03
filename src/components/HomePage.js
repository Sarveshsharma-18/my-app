import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import StatsCard from '../StatsCard';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="stats-container">
                    <StatsCard title="Total Distance (Km)" value="1058.3" />
                    <StatsCard title="Carbon Saving (Kg)" value="2185.3" />
                    <StatsCard title="Cost Saving (₹)" value="3799.1" />
                    <StatsCard title="Rider Score" value="7.8" />
                    <StatsCard title="Inactive Devices" value="0" />
                    <StatsCard title="TBC" value="NA" />
                </div>
                <div className="action-buttons">
                    <button>Vehicle Details</button>
                    <button>BMS Details</button>
                    <button>VCU Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
