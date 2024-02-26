import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { fetchReservations, selectAllReservations } from '../redux/reservationsSlice';
import style from '../styles/Vehicles.module.css';

function ReservationsList() {
  const dispatch = useDispatch();
  const reservations = useSelector(selectAllReservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const renderReservations = () => (
    reservations.map((reservation) => (
      <li key={reservation.id} className={style['vehicle-card']}>
        <div className={style.img}>
          <img
            src={reservation.image}
            alt={reservation.name}
          />
        </div>
        <p>
          Reserved for date :
          {reservation.reserve_for_use_date}
        </p>
        <p className={style['prev-reserve']}>
          You Reserved This Car From:
          {' '}
          <span>
            {reservation.city}
          </span>
        </p>
        <Link className={style['more-btn']} to={`/items/${reservation.id}`}>more Details</Link>
      </li>
    ))
  );

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <h2 className={style['vehicle-heading']}>Your Reservations</h2>
      <Carousel breakPoints={breakPoints}>
        {renderReservations()}
      </Carousel>
    </div>
  );
}

export default ReservationsList;
