import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailItem } from '../redux/ItemDeatils';
// eslint-disable-next-line import/no-extraneous-dependencies
import style from '../styles/Vehicles.module.css';

function CarDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const itemDetailsData = useSelector((state) => state.itemDetail.itemDetail.item);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailItem(id)).unwrap();
    }
  }, [id, dispatch]);

  if (!itemDetailsData || !user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style['section-item-details']}>
      <div className={style['details-img']}>
        <img src={itemDetailsData.image} alt={itemDetailsData.name} />
      </div>
      <div className={style['details-des']}>
        <p className={style['details-name']}>{itemDetailsData.name}</p>
        <div className={style['details-info']}>
          <p className={style['dark-bg']}>
            <span>City:</span>
            <span>{itemDetailsData.city}</span>
          </p>
          <p>
            <span>Finance Fee:</span>
            <span>{itemDetailsData.financeFee}</span>
          </p>
          <p className={style['dark-bg']}>
            <span>Purchase Fee:</span>
            <span>{itemDetailsData.purchaseFee}</span>
          </p>
          <p>
            <span>Total Payable:</span>
            <span>{itemDetailsData.totalAmount}</span>
          </p>
          <p className={style['dark-bg']}>
            <span>Duration:</span>
            <span>{itemDetailsData.duration}</span>
          </p>
          <p>
            <span>APR Representative:</span>
            <span>{itemDetailsData.apr}</span>
          </p>
        </div>
        <p>
          Your total reservation
          {' '}
          {itemDetailsData.reservation_count}
        </p>
        <Link className={style['cancel-reservation']} to="/reservationsPage">Reserve</Link>
        <button className={style['add-new']} type="button">
          Add new
        </button>
      </div>
    </div>
  );
}

export default CarDetail;
