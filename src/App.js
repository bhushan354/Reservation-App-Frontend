import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub,
} from 'react-icons/fa';

import Logo from './assets/images/logo.png';

const App = () => (
  <div className="App">
    <div className="app-container">
      <header className="App-header">
        <div className="logo-container">
          <img src={Logo} alt="brand-logo" />
        </div>
        <nav className="nav">
          <a href="/">Vehicles</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <a href="/items/new">Add New Car</a>
          <a href="/">My Reservations</a>
          <button type="button" className="log-out-btn">Logout</button>
        </nav>

        <div className="app-social-links">
          <div><FaFacebook size={22} color="#3b5998" /></div>
          <div><FaTwitter size={22} color="#1da1f2" /></div>
          <div><FaLinkedin size={22} color="#0077b5" /></div>
          <div><FaGithub size={22} color="#171515" /></div>
        </div>
      </header>

      <div className="App-content">
        <h1>Pages</h1>
      </div>
    </div>
  </div>
);

export default App;
