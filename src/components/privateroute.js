import React from 'react';
import { Navigate } from 'react-router-dom';

// Check if user is logged in (you can use localStorage or a context)
const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Check if JWT token exists in localStorage
};

function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />; // If not logged in, redirect to the login page
    }
    return children; // If logged in, allow access to the route
}


export default PrivateRoute;
