import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveItem } from '../redux/reservationsSlice';

function ReservationPage() {
  const dispatch = useDispatch();

  const itemData = useSelector((state) => state.item.item);
  console.log(itemData.item, 'umair');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      reserveItem({
        // item_id: item.id,
      }),
    );
    // Navigate('/myreservations');
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
