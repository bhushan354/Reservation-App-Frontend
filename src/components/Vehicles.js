import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-elastic-carousel';
import { fetchItemDetail } from '../redux/ItemDetail';
import style from '../styles/Vehicles.module.css';
// import { Link } from 'react-router-dom';

const Vehicles = () => {
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.itemDetail.itemDetail);
  useEffect(() => {
    dispatch(fetchItemDetail()).unwrap();
  }, []);
  console.log(itemData.items, 'umair');
  const renderItems = () => itemData.items.map((i) => (
    <li key={i.id} className={style['vehicle-card']}>
      <div className={style.img}>
        <img
          src={i.image}
          alt={i.name}
        />
      </div>
      <h3>{i.name}</h3>
      <p className={style.dummy}>
        aunthentic
      </p>
      <p>
        {' '}
        {i.description}
      </p>
      <p className={style['prev-reserve']}>
        You can Reserve This Car From:
        {' '}
        <span>
          {i.city}
        </span>
      </p>
      {/* <Link className={style['more-btn']} to={`/item/${n.id}`}>more Details</Link> */}
    </li>
  ));

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className={style['section-vehicles']}>
      <h2 className={style['vehicle-heading']}>Cars Models</h2>
      <ul className={style['vehicle-slider']}>
        <Carousel breakPoints={breakPoints} focusOnSelect initialActiveIndex={1}>
          {renderItems()}
        </Carousel>
      </ul>
    </div>
  );
};

export default Vehicles;
