import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}
const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/check-auth', { withCredentials: true })
      .then((response) => {
        setIsAuthenticated(response.data.isLoggedIn);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthGuard;
