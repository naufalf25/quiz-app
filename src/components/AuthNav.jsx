// eslint-disable-next-line no-unused-vars
import React from 'react';

const AuthNav = ({ login }) => {
  return (
    <div>
      {login === 'true' ? (
        <a href="/logout" rel="noopener noreferrer" className="auth-nav">
          Logout
        </a>
      ) : (
        <a href="/login" rel="noopener noreferrer" className="auth-nav">
          Login
        </a>
      )}
    </div>
  );
};

export default AuthNav;
