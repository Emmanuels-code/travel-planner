import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import LoginPage from './components/loginpage.js'; // Make sure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;