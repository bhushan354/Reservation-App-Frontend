import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import style from '../styles/Auth.module.css';
import { loginFailure, loginSuccess } from '../redux/Auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [passworD, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !passworD) {
        setError('Email and password are required');
        return;
      }

      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            login: email,
            password: passworD,
          },
        }),
      });
      console.log(response, 'umair');
      const responseJson = await response.json();
      const { status } = responseJson;
      console.log(responseJson, 'zain');

      if (status && status.code === 200) {
        const { data } = responseJson;
        const { firstName, lastName, email } = data;
        dispatch(loginSuccess({ user: { firstName, lastName, email } }));
        navigate('/');
        alert('Successfully Logged in');
      } else {
        dispatch(loginFailure());
        setTimeout(() => {
          setError('Login failed. Please enter correct email and password');
        }, 1000);
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      dispatch(loginFailure());
      setError('An error occurred');
    }
  };

  return (
    <div className={style['section-auth-container']}>
      <div className={`${style.color} ${style['color-1']}`} />
      <div className={`${style.color} ${style['color-2']}`} />
      <div className={`${style.color} ${style['color-3']}`} />
      <div className={style.box}>
        <div className={style.container}>
          <h2 className={style.heading}>Login Form</h2>
          <form className={style.form} onSubmit={handleLogin}>
            <input
              type="text"
              name="login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or Email"
            />
            <div className={style['input-container']}>
              <input
                type="password"
                name="password"
                value={passworD}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            {error && <div className={style['error-msg']}>{error}</div>}
            <button type="submit" className={style['submit-btn']}>
              Log In
            </button>
            <p>
              Do not have an accout?
              <button type="button">Sign Up</button>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
