import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard'; // Ensure this path matches the location of your Dashboard component
import './App.css'; // Assuming your main styling

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoginMessage('');
  
      const loginUrl = 'http://127.0.0.1:5000/login';

  
      try {
        const response = await fetch(loginUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          navigate('/dashboard'); // Navigate to Dashboard on success
        } else {
          setLoginMessage('Login Failed: ' + data.message);
        }
      } catch (error) {
        setLoginMessage('Login Error: ' + error.toString());
      }
    };
  
  

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {loginMessage && <p>{loginMessage}</p>}
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
