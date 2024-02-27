import React from 'react';
import { useSelector } from 'react-redux';

function ReservationPage() {
  const itemData = useSelector((state) => state.item.item);
  // console.log(itemData.item, 'umair');
  return (
    <div className="reservation-page">
      <div className="page-content">
        <form>
          <div>
            <span>BOOK A</span>
            {itemData.item.name}
            <span>TEST - RIDE</span>
          </div>
          <div>{itemData.item.description}</div>
          <div>
            <span>City:</span>
            <input
              id="item-city"
              type="text"
              placeholder="City"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReservationPage;
