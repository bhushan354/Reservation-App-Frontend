import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailItem } from '../redux/ItemDeatils';
// eslint-disable-next-line import/no-extraneous-dependencies
import style from '../styles/Vehicles.module.css';

const CarDetail = () => {
  const { id } = useParams();
  //   const [reserveDate, setReserveDate] = useState('');
  const dispatch = useDispatch();

  const itemDetailsData = useSelector((state) => state.itemDetail.itemDetail.item);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailItem(id)).unwrap();
    }
  }, [id, dispatch]);

  if (!itemDetailsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style['section-item-details']}>
      <div className={style['back-btn']}>
        <button type="button">
          Back Button
        </button>
      </div>
      <div className={style['details-img']}>
        <img
          src={itemDetailsData.image}
          alt={itemDetailsData.name}
        />
      </div>
      <div className={style['details-des']}>
        <p className={style['details-name']}>
          {itemDetailsData.name}
        </p>
        <div className={style['details-info']}>
          <p className={style['dark-bg']}>
            <span>
              City:
            </span>
            <span>
              {itemDetailsData.city}
            </span>
          </p>
          <p>
            <span>
              Finance Fee:
            </span>
            <span>
              {itemDetailsData.financeFee}
            </span>
          </p>
          <p className={style['dark-bg']}>
            <span>
              Purchase Fee:
            </span>
            <span>
              {itemDetailsData.purchaseFee}
            </span>
          </p>
          <p>
            <span>
              Total Payable:
            </span>
            <span>
              {itemDetailsData.totalAmount}
            </span>
          </p>
          <p className={style['dark-bg']}>
            <span>
              Duration:
            </span>
            <span>
              {itemDetailsData.duration}
            </span>
          </p>
          <p>
            <span>
              APR Representative:
            </span>
            <span>
              {itemDetailsData.apr}
            </span>
          </p>
        </div>
        <p className={style['prev-reserve']}>
          You Reserve This Car
          {' '}
          <span>
            {itemDetailsData.you_reserve}
          </span>
          {' '}
          Time
        </p>
        <p>
          Your total reservation
          {' '}
          {itemDetailsData.reservation_count}
        </p>
        <form className={style['date-form']}>
          <input
            type="date"
          />
          <button type="submit">Reserve</button>
        </form>
        <button className={style['cancel-reservation']} type="button">
          Cancel Reservation
        </button>
        <button className={style['add-new']} type="button">
          Add new
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
