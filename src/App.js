import React, { useState } from 'react';
import './App.css';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub,
  FaBars,
  FaArrowLeft,
  FaTimes,
} from 'react-icons/fa';
import {
  Routes, Route, NavLink, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './assets/images/logo.png';
import Vehicles from './components/Vehicles';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddVehicle from './components/AddVehicle';
import CarDetail from './components/CarDetail';
import { logout } from './redux/Auth';
import style from './styles/Vehicles.module.css';
import ReservationsList from './components/ReservationsList';
import ReservationPage from './components/ReservationPage';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState('');
  const user = useSelector((state) => state.auth);
  const [showHeader, setShowHeader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleHeader = () => {
    setShowHeader(!showHeader);
    setShowContent(false);
    if (showHeader) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeHeader = () => {
    setShowHeader(false);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      setLogoutMessage('Logout successful');
      setTimeout(() => {
        setLogoutMessage('');
      }, 1000);
      navigate('/');
    } catch (error) {
      setLogoutMessage('Logout failed');
    }
  };

  const handleBackToVehicles = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className={style['back-btn']}>
          <button type="button" className="mob-btn" onClick={handleBackToVehicles}>
            <FaArrowLeft size={24} />
            {' '}
          </button>
          <button type="button" className="mob-btn" onClick={toggleHeader}>
            <FaBars size={24} color="black" />
            {' '}
          </button>
        </div>
        <div className={`App-header ${showHeader ? 'flex' : ''}`}>
          <button type="button" className="mob-btn" onClick={toggleHeader}>
            <FaTimes size={24} color="black" />
            {' '}
          </button>
          <div className="logo-container">
            <img src={Logo} alt="brand-logo" />
          </div>
          <nav className="nav">
            <NavLink to="/" onClick={() => { closeHeader(); setShowContent(true); }}>Vehicles</NavLink>
            {user.isAuthenticated ? null : (
              <>
                <NavLink to="/login" onClick={() => { closeHeader(); setShowContent(true); }}>Login</NavLink>
                <NavLink to="/signup" onClick={() => { closeHeader(); setShowContent(true); }}>Signup</NavLink>
              </>
            )}
            {user.isAuthenticated && (
              <>
                <NavLink to="/reservations" onClick={() => { closeHeader(); setShowContent(true); }}>My Reservations</NavLink>
                <NavLink to="/addVehicle" onClick={() => { closeHeader(); setShowContent(true); }}>Add New Vehicle</NavLink>
                <button onClick={() => { handleLogout(); closeHeader(); setShowContent(false); }} type="button" className="log-out-btn">
                  Logout
                </button>

              </>
            )}
            {logoutMessage && <p>{logoutMessage}</p>}
          </nav>

          <div className="app-social-links">
            <div><FaFacebook size={22} color="#3b5998" /></div>
            <div><FaTwitter size={22} color="#1da1f2" /></div>
            <div><FaLinkedin size={22} color="#0077b5" /></div>
            <div><FaGithub size={22} color="#171515" /></div>
          </div>
        </div>

        {showContent && (
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Vehicles />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/addVehicle" element={<AddVehicle />} />
              <Route path="/items/:id" element={<CarDetail />} />
              {user.isAuthenticated && (
                <>
                  <Route path="/reservations" element={<ReservationsList />} />
                  <Route path="/reservationsPage" element={<ReservationPage />} />
                </>
              )}
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
