import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../../utils/fetchApi';
import classes from './login.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Please provide both email and password.');
      return;
    }

    try {
      const options = {
        'Content-Type': 'application/json',
      };

      const data = await request('/auth/login', 'POST', options, { email, password });
      if (data.error) {
        setErrorMessage(data.error); // Set the error message if the user does not exist
      } else {
        console.log('///////////////////////////');
        console.log(data);
        dispatch(login(data));

        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login</h2>
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
