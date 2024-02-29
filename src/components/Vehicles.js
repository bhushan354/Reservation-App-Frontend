import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-elastic-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { fetchItem } from '../redux/Item';
import style from '../styles/Vehicles.module.css';

function Vehicles() {
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.item.item);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchItem()).unwrap();
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const renderItems = () => (
    itemData.items.map((i) => (
      <li key={i.id} className={style['vehicle-card']}>
        <div className={style.img}>
          <img
            src={i.image}
            alt={i.name}
          />
        </div>
        <h3>{i.name}</h3>
        <p>{i.description}</p>
        <p className={style['prev-reserve']}>
          This Car is Added From:
          {' '}
          <span>
            {i.city}
          </span>
        </p>
        {user.isAuthenticated ? (<Link className={style['more-btn']} to={`/items/${i.id}`}>more Details</Link>
        ) : (<p className={style['login-to-details']}>Please Login to View More Details</p>)}
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
    <div className={style['section-vehicles']}>
      <h2 className={style['vehicle-heading']}>Cars Models</h2>
      {user.isAuthenticated ? (
        <>
          <h4 className={style.welcome}>Welcome</h4>
          <h6 className={style['title-heading']}>
            {user.user.firstName}
            {' '}
            {user.user.lastName}
          </h6>
        </>
      ) : <p className={style['title-heading']}>Please Login</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style['vehicle-slider']}>
          <Carousel breakPoints={breakPoints} focusOnSelect initialActiveIndex={1}>
            {renderItems()}
          </Carousel>
        </ul>
      )}
    </div>
  );
}

export default Vehicles;
