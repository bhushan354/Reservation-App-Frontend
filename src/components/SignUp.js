import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import style from '../styles/Auth.module.css';

function SignUp() {
  const navigate = useNavigate();
  const [username, setuserName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setcity] = useState('');
  const [error, setError] = useState('');

  const handleCityChange = (e) => {
    setcity(e.target.value);
  };

  const isAlpha = (str) => /^[A-Za-z]+$/.test(str);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');

      if (!isAlpha(firstName) || !isAlpha(lastName)) {
        setError(
          'First Name, Last Name, and Username should contain only letters (no spaces/numbers).',
        );
        return;
      }

      if (password.trim() === '') {
        setError("Password can't be blank");
        return;
      }

      if (password.length < 6) {
        setError('Password is too short (minimum is 6 characters)');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const dataToSend = {
        user: {
          username,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          city,
        },
      };

      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        'http://localhost:3000/signup',
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        // Successful signup
        navigate('/');
        setuserName('');
        setfirstName('');
        setlastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setcity('');
        setError('');
        alert('The user signed up successfully. Now please login from the login page.');
      } else {
        const errorMessage = response.data.status.message;
        setError(errorMessage);
      }
    } catch (error) {
      if (
        error.response
        && error.response.data
        && error.response.data.status
        && error.response.data.status.message
      ) {
        setError(error.response.data.status.message);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className={style['section-auth-container']}>
      <div className={`${style.color} ${style['color-1']}`} />
      <div className={`${style.color} ${style['color-2']}`} />
      <div className={`${style.color} ${style['color-3']}`} />
      <div className={style.box}>
        <div className={style.container}>
          <h2 className={style.heading}>Registration</h2>
          <div className={style['modal-overlay']}>
            <div className={style['modal-content']}>
              <div className={style.spinner} />
              <p className={style['loading-message']}>Loading...</p>
            </div>
          </div>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {error && <div className={style['error-msg']}>{error}</div>}
            <input
              type="password"
              name="passwordConfirmation"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            {error && <div className={style['error-msg']}>{error}</div>}
            <select name="city" value={city} onChange={handleCityChange}>
              <option value="">Select Continent</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Europe">Europe</option>
            </select>
            <button type="submit" className={style['submit-btn']}>
              Register
            </button>
            <p>
              Already have an account?
              <button type="button">Log In</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
