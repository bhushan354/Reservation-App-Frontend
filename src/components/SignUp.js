import React from 'react';
import style from '../styles/Auth.module.css';

const SignUp = () => {
  const value = 'go';
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
          <form className={style.form}>
            <input
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
            />
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email" />
            <select name="city">
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
                {' '}
                {value}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
