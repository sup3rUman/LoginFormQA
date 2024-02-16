import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faNetworkWired, faRobot, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const insights = [
    { id: 1, name: "Unit Testing", icon: faCode, description: "Testing individual units or components." },
    { id: 2, name: "Integration Testing", icon: faNetworkWired, description: "Testing interfaces between components." },
    { id: 3, name: "System Testing", icon: faRobot, description: "Testing a complete and integrated software." },
    { id: 4, name: "Acceptance Testing", icon: faUsers, description: "Validating the end-to-end business flow." }
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>QA & Testing Insights</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="insights">
        {insights.map(insight => (
          <div className="insight" key={insight.id}>
            <div className="icon">
              <FontAwesomeIcon icon={insight.icon} size="3x" />
            </div>
            <p>{insight.name}</p>
            <div className="info">{insight.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
