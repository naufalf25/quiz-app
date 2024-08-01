// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('login') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Layout>
      <div>Questions Page</div>
    </Layout>
  );
};

export default Questions;
