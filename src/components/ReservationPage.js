import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveItem } from '../redux/reservationsSlice';

function ReservationPage() {
  const dispatch = useDispatch();
  const [sendCity, setsendCity] = useState('');
  const [date, setdate] = useState('');

  const itemData = useSelector((state) => state.item.item);
  console.log(itemData.item, 'umair');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      reserveItem({
        item_id: itemData.item,
        city: sendCity,
        reserveDate: date,
      }),
    );
    // Navigate('/myreservations');
    setsendCity('');
    setdate('');
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
