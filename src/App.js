import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/homepage'; // Public homepage
import AuthenticatedHomePage from './components/authenthicatedHomePage'; // Authenticated homepage
import LoginPage from './components/loginpage';
import SignUpPage from './components/signuppage';
import PrivateRoute from './components/privateroute.js'; // For private route handling
import LocationList from './components/locationlist.js';
import NoteScreen from './components/notespage.js'; // New import for NoteScreen
import AboutPage from './components/about.js';
import { jwtDecode } from 'jwt-decode';

const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    // Check if the token has expired
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  } catch (e) {
    console.error('Invalid token:', e);
    return false;
  }
};

// Utility function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  return token && isTokenValid(token); // Check if JWT token exists and is valid
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Conditionally route to the correct homepage */}
          <Route
            path="/"
            element={isAuthenticated() ? <AuthenticatedHomePage /> : <HomePage />}
          />

          <Route path="/about" element={<AboutPage />} />

          {/* Login and signup routes */}
          <Route
            path="/login"
            element={isAuthenticated() ? <Navigate to="/" replace /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={isAuthenticated() ? <Navigate to="/" replace /> : <SignUpPage />}
          />

          {/* LocationList route */}
          <Route
            path="/locations"
            element={
              <PrivateRoute>
                <LocationList />
              </PrivateRoute>
            }
          />

          {/* NoteScreen route for creating itineraries */}
          <Route
            path="/note"
            element={
              <PrivateRoute>
                <NoteScreen />
              </PrivateRoute>
            }
          />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
