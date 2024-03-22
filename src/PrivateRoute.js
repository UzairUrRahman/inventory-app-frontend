import React, { useEffect, useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

// Custom PrivateRoute component
const PrivateRoute = ({ element: Component, ...rest }) => {
  // State to hold the authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check if the user is authenticated
  const checkAuthentication = () => {
    // Retrieve token from localStorage or wherever it's stored
    const token = localStorage.getItem('token');
    // Check if token exists
    if (token) {
      // If token exists, set isAuthenticated to true
      setIsAuthenticated(true);
    } else {
      // If token does not exist, set isAuthenticated to false
      setIsAuthenticated(false);
    }
  };

  // Check authentication status when the component mounts
  useEffect(() => {
    checkAuthentication();
  }, []);

  // Render the Route component with the appropriate logic
  return (
    <Routes>
      {isAuthenticated ? (
        <Route {...rest} element={<Component />} />
      ) : (
        // If not authenticated, redirect to the home page
        <Navigate to="/" replace />
      )}
    </Routes>
  );
};

export default PrivateRoute;
