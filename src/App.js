import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/visualizer" element={<PathfindingVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
