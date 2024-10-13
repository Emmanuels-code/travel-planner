import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/homepage';
import AuthenticatedHomePage from './components/authenthicatedHomePage.js';
import LoginPage from './components/loginpage';
import SignUpPage from './components/signuppage';
import LocationList from './components/locationlist';
import NoteScreen from './components/notespage';
import AboutPage from './components/about';
import { jwtDecode } from 'jwt-decode';

const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    return Date.now() < exp * 1000;
  } catch (e) {
    console.error('Invalid token:', e);
    return false;
  }
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(isTokenValid(token));
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <AuthenticatedHomePage onLogout={handleLogout} />
              ) : (
                <HomePage />
              )
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route
            path="/locations"
            element={isAuthenticated ? <LocationList /> : <Navigate to="/login" />}
          />
          <Route
            path="/note"
            element={isAuthenticated ? <NoteScreen /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;