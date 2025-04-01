import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to the Pathfinding Visualizer!</h1>
      <p>Explore algorithms like Dijkstra and A* in action.</p>
      <button onClick={() => navigate('/visualizer')}>View Path Visualizer</button>
    </div>
  );
}

export default WelcomePage;
