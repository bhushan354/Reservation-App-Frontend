import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, selectAllReservations } from '../redux/reservationsSlice';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(selectAllReservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h2>Reservations</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>
            Reservation ID:
            {reservation.id}
          </p>
          <p>
            Customer ID:
            {reservation.customer_id}
          </p>
          <p>
            Reservation Date:
            {reservation.reserve_for_use_date}
          </p>
          <p>
            City:
            {reservation.city}
          </p>
          {/* Add more reservation details as needed */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ReservationsList;
