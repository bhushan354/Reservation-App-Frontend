import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
      alert('Vechile Reserved');
    } catch (error) {
      // Handle error if needed
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <div className="reservation-page">
      <div className="page-content">
        <form onSubmit={handleSubmit}>
          <div>
            <span>BOOK A</span>
            {itemData.item.name}
            <span>TEST - RIDE</span>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReservationPage;
