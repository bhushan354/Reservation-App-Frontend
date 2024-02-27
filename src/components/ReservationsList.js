import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-elastic-carousel';
import {
  fetchReservations,
  selectAllReservations,
  deleteReservation,
} from '../redux/reservationsSlice';
import style from '../styles/Vehicles.module.css';

function ReservationsList() {
  const dispatch = useDispatch();
  const reservations = useSelector(selectAllReservations);
  const itemData = useSelector((state) => state.item.item);
  const isLoading = useSelector((state) => state.reservations.loading);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleDeleteReservation = (id) => {
    dispatch(deleteReservation(id));
  };

  const filterReservations = () => reservations.filter((reservationItem) => {
    const matchingDataItem = itemData?.items?.find(
      (dataItem) => dataItem.id === reservationItem.item_id,
    );
    return matchingDataItem !== undefined;
  });
  const filteredReservations = filterReservations();

  const renderReservations = () => filteredReservations.map((reservation) => (
    <li key={reservation.id} className={style['vehicle-card']}>
      <div className={style.img}>
        <img
          src={
              itemData?.items?.find(
                (dataItem) => dataItem.id === reservation.item_id,
              )?.image
            }
          alt={reservation.name}
        />
      </div>
      <p>
        Name :
        {' '}
        {
            itemData?.items?.find(
              (dataItem) => dataItem.id === reservation.item_id,
            )?.name
          }
      </p>
      <p>
        Description :
        {' '}
        {
            itemData?.items?.find(
              (dataItem) => dataItem.id === reservation.item_id,
            )?.description
          }
      </p>
      <p>
        Reserved for date :
        {' '}
        {reservation.reserveForUseDate}
      </p>
      <p className={style['prev-reserve']}>
        You Reserved This Car From:
        {' '}
        <span>{reservation.city}</span>
      </p>
      <button
        type="button"
        className={style['delete-button']}
        onClick={() => handleDeleteReservation(reservation.id)}
      >
        Delete Reservation
      </button>
    </li>
  ));

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <h2 className={style['vehicle-heading']}>Your Reservations</h2>
      {isLoading ? (
        <p className={style.loading}>Loading...</p>
      ) : (
        <Carousel breakPoints={breakPoints}>{renderReservations()}</Carousel>
      )}
    </div>
  );
}

export default ReservationsList;
