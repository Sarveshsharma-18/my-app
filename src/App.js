// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [dashboardData, setDashboardData] = useState(null);

    const handleLogin = async (token) => {
        setToken(token);
        setIsLoggedIn(true);
        var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI1MzQ3ODA3LCJleHAiOjE3MjU5NTI2MDd9.tooCuriKCJ3UP2i1flHDI8SMB5-z8qt2zAWPFwmgfLiyYSww9Ir9_HA9zAz_zqA0FfKvFONpuTpDz6LVQqUu8-KDifWQ3M9DYVRDDF0EdVFQlve8PKP2FBA5iBYn1FSBAwkMqjWW7gsAq1MCYphxIYjuX8K2c5U_PNHixl93A9Pzx8IaifVq9V1P4OB-a14fZhOihNgscHMgye-j74373lC5qRIWWQp0KYjK2txeSQcAyy5OKV_vJLfAfwscCMuIjLqaLNUh6Yy2QCckG3jblSu8G7rzKz2H-rQQLhAJyh_WYDtPsK4uwcI-BsP3P0LWBq4Z8UbvRFlb7XGQx0YnrA"

        try {
            const response = await fetch('https://prod.api.greentiger.in/api/v1/dashboard_kpis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token} `,
                },
                body: JSON.stringify({
                    cumulative: 1,
                    clientId: 31,
                    type: 'LOGIN',
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Dashboard KPIs:', data);
                setDashboardData(data);  // Store the dashboard data
            } else {
                console.error('Failed to fetch dashboard KPIs');
            }
        } catch (error) {
            console.error('Error fetching dashboard KPIs:', error);
        }
    };

    return (
        <div className="App">
            {isLoggedIn && dashboardData ? (
                <Dashboard data={dashboardData} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
