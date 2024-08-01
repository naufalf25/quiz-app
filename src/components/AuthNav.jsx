// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <a href="/login" rel="noopener noreferrer" className="auth-nav">
          Login
        </a>
      )}
    </div>
  );
};

export default AuthNav;
