import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import style from '../styles/ReservationPage.module.css';

function ReservationPage() {
  const navigate = useNavigate();
  const [sendCity, setsendCity] = useState('');
  const [date, setdate] = useState('');
  const itemData = useSelector((state) => state.item.item);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      customer_id: 1,
      item_id: itemData.item.id,
      city: sendCity,
      reserveForUseDate: date,
    };

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        'http://127.0.0.1:3000/api/v1/reservations',
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setsendCity('');
      setdate('');
      // eslint-disable-next-line no-alert
      alert('Vehicle Reserved');
      navigate('/');
    } catch (error) {
      // Handle error if needed
      throw ('Error submitting reservation:', error);
    }
  };

  return (
    <div className="reserve-Div">
      <div className={`${style['section-auth-container']} ${style.container}`}>
        <h2 className={style.heading}>Book a Test Ride</h2>
        <div className={style.img}>
          <img
            src={itemData.item.image}
            alt={itemData.item.name}
          />
        </div>
        <div className={style['page-content']}>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.title}>
              <span>BOOK A </span>
              {itemData.item.name}
              <span> TEST - RIDE</span>
            </div>
            <div className={style.desc}>{itemData.item.description}</div>
            <div>
              <label htmlFor="reserve-city">
                <span className={style.inputHeading}>City:</span>
                <input
                  id="item-city"
                  type="text"
                  value={sendCity}
                  onChange={(e) => setsendCity(e.target.value)}
                  placeholder="City"
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="reserve-date">
                <span className={style.inputHeading}>Date:</span>
                <input
                  type="date"
                  id="reserve-date"
                  name="date"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
              </label>
            </div>
            <button type="submit" className={style['submit-btn']}>Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;
