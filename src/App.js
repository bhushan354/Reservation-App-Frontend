import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub,
} from 'react-icons/fa';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Routes, Route, NavLink,
} from 'react-router-dom';
import Logo from './assets/images/logo.png';
import Vehicles from './components/Vehicles';
import Login from './components/Login';
import SignUp from './components/SignUp';
// eslint-disable-next-line import/extensions
import ReservationsList from './components/ReservationsList';
import ReservationDetails from './components/ReservationDetails';
import AddCar from './components/AddCar';
import CarDetail from './components/CarDetail';

const App = () => (
  <div className="App">
    <div className="app-container">
      <header className="App-header">
        <div className="logo-container">
          <img src={Logo} alt="brand-logo" />
        </div>
        <nav className="nav">
          <NavLink to="/">Vehicles</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/reservations">My Reservations</NavLink>
          <NavLink to="/addCar">Add New Car</NavLink>
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
        <Routes>
          <Route path="/" element={<Vehicles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/items/:id" element={<CarDetail />} />
          <>
            <Route path="/reservations" element={<ReservationsList />} />
            <Route path="/reservations/details" element={<ReservationDetails />} />
          </>
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
