import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import style from '../styles/Auth.module.css';

function ReservationPage() {
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
    } catch (error) {
      // Handle error if needed
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <div className="reserve-Div">
      <div className={`${style['section-auth-container']} ${style.container}`}>
        <h2 className={style.heading}>Book a Test Ride</h2>
        <div className={style['page-content']}>
          <form onSubmit={handleSubmit} className={style['new-item-form']}>
            <div>
              <span>BOOK A </span>
              {itemData.item.name}
              <span> TEST - RIDE</span>
            </div>
            <div>{itemData.item.description}</div>
            <div>
              <label htmlFor="reserve-city">
                <span>City:</span>
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
              <input
                type="date"
                id="reserve-date"
                name="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
            <button type="submit" className={style['submit-btn']}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;
