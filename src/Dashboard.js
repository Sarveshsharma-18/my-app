// src/Dashboard.js
import React from 'react';
import Card from './Cards';
import './Dashboard.css';

function Dashboard({ data }) {
  // var h = data["data"]
  console.log(data.data)
  return (

    <div className="dashboard">
      <div className="card-container">

        {Object.entries(data.data["LDV_EC200U_"]).map(([key, value], index) => (
          <Card key={index} title={key} content={JSON.stringify(value, null, 2)} />

        ))}

      </div>
    </div>
  );
}

export default Dashboard;
