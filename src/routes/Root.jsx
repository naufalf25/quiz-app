// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('login') === 'true') {
      navigate('/questions');
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="w-full p-4 min-h-[90vh] flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">Welcome to</h1>
        <h1 className="mt-2 font-bold text-2xl uppercase font-pacifico text-purple1 md:text-3xl lg:text-4xl">
          Answer Me!
        </h1>
        <div className="mt-10 text-center lg:text-lg">
          <p>A place where you can answer questions given randomly here</p>
          <p>
            <i>Please login to try some questions</i>
          </p>
        </div>
        <a
          href="/login"
          className="mt-10 py-1 px-10 border border-purple1 rounded-md font-bold text-purple1 hover:bg-purple1 hover:text-white"
        >
          Login
        </a>
      </div>
    </Layout>
  );
};

export default Root;
