import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value }) => {
    return (
        <div className="stats-card">
            <h3>{value}</h3>
            <p>{title}</p>
        </div>
    );
};

export default StatsCard;
