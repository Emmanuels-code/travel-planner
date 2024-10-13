import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
// Helper function to check token validity
const isTokenValid = (token) => {
    if (!token) return false;

    try {
        const { exp } = jwtDecode(token);
        return Date.now() < exp * 1000; // Return true if token hasn't expired
    } catch (error) {
        console.error('Invalid token:', error);
        return false;
    }
};

// Private route component
function PrivateRoute({ children }) {
    const token = localStorage.getItem('token');
    const authenticated = isTokenValid(token);

    if (!authenticated) {
        return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }

    return children; // Render the children components if authenticated
}

export default PrivateRoute;
