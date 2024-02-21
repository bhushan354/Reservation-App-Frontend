import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import style from '../styles/Auth.module.css';

const SignUp = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');

      if (password.trim() === '') {
        setError("Password can't be blank");
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
      console.log(dataToSend, 'umair');

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

      navigate('/');

      setuserName('');
      setfirstName('');
      setlastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setcity('');
      setError('');
    } catch (error) {
      if (
        error.response
        && error.response.data
        && error.response.data.message[0]
      ) {
        setError(error.response.data.message[0]);
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
            />
            <input type="text" name="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder="First Name" />
            <input type="text" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} placeholder="Last Name" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <div className="text-red-500">{error}</div>}
            <input
              type="password"
              name="passwordConfirmation"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            {error && <div className="text-red-500">{error}</div>}
            <select name="city" value={city} onChange={handleCityChange}>
              <option value="">Select Continent</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Eurpoe">Eurpoe</option>
            </select>
            <button type="submit" className={style['submit-btn']}>Register</button>
            <p>
              Already have an account?
              <button type="button">
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
