// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Contact from '../components/auth/Contact';
import auth from '../../auth.json';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('login') === 'true') {
      navigate('/questions');
    }
  }, [navigate]);

  const submitEvent = (e) => {
    e.preventDefault();

    if (username !== '' && password !== '') {
      for (let getAuth of auth) {
        if (username === getAuth.username && password === getAuth.password) {
          alert('login success!');
          setUsername('');
          setPassword('');

          localStorage.setItem('login', true);
          navigate('/questions');
          return;
        }
      }

      alert('Incorrect username or password!');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[600px] min-h-[90vh] p-4 flex flex-col justify-center items-center gap-20">
          <Contact />
          <div className="w-full p-4 border border-purple1 rounded-md text-center">
            <h2 className="font-bold text-xl lg:text-2xl">Login</h2>
            <form
              onSubmit={submitEvent}
              className="px-2 mt-6 flex flex-col justify-center items-center gap-5"
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="login-input"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <div className="w-full border border-slate-700 rounded-md flex items-center justify-between">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="login-input border-none"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-10 p-2 bg-purple1 rounded-md text-white font-semibold text-lg hover:opacity-90"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
