import React from 'react';
import style from '../styles/Auth.module.css';

const Login = () => {
  const value = 'go';
  return (
    <div className={style['section-auth-container']}>
      <div className={`${style.color} ${style['color-1']}`} />
      <div className={`${style.color} ${style['color-2']}`} />
      <div className={`${style.color} ${style['color-3']}`} />
      <div className={style.box}>
        <div className={style.container}>
          <h2 className={style.heading}>Login Form</h2>
          <form className={style.form}>
            <input
              type="text"
              name="login"
              placeholder="Username or Email"
            />
            <div className={style['input-container']}>
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className={style['submit-btn']}>
              Log In
              {' '}
              {value}
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
