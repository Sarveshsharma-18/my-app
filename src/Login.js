// src/Login.js
import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('https://prod.api.greentiger.in/api/v1/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',


                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login Successful:', data);
                const token = data.token;  // Assuming the token is returned as 'token'
                onLogin(token);  // Pass the token to the parent component
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred during login');
            console.error('Error:', error);
        }
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fafafa",
                    padding: "40px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    width: "400px",
                }}
            >
                {/* <img
          src={${process.env.PUBLIC_URL}/image.png}
          alt="Green Tiger Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        /> */}
                <h1
                    style={{
                        margin: 0,
                        fontFamily: "Arial, sans-serif",
                        fontSize: "24px",
                        color: "#000",
                        letterSpacing: "2px",
                    }}
                >
                    GREEN TIGER
                </h1>
                <div style={{ marginBottom: "20px" }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: "12px",
                            color: "purple",
                            textAlign: "left",
                            marginBottom: "5px",
                        }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="user@greentiger.in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "14px",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: "12px",
                            color: "purple",
                            textAlign: "left",
                            marginBottom: "5px",
                        }}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "14px",
                        }}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#fafafa",
                        borderRadius: "5px",
                        color: "#000",
                        fontSize: "14px",
                        cursor: "pointer",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
    // return (
    //     <div className="login-container">
    //         <h2>Login</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div className="input-group">
    //                 <label htmlFor="email">Email:</label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                     required
    //                 />
    //             </div>
    //             <div className="input-group">
    //                 <label htmlFor="password">Password:</label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
    //                     required
    //                 />
    //             </div>
    //             {error && <p className="error">{error}</p>}
    //             <button type="submit">Login</button>
    //         </form>
    //     </div>
    // );
}

export default Login;
