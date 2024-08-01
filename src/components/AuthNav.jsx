// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthNav = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.setItem('login', false);
    localStorage.removeItem('userId');

    navigate('/');
  };

  return (
    <div>
      {localStorage.getItem('login') === 'true' ? (
        <button onClick={logoutUser} className="auth-nav">
          Logout
        </button>
      ) : (
        <Link to="/login" rel="noopener noreferrer" className="auth-nav">
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthNav;
