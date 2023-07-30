import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  const user = null 
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <WelcomeScreen />
        ) : (
          <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

