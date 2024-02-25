// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
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
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };

    fetchData();
  }, [dispatch]);

  const renderItems = () => itemData.items.map((i) => (
    <div key={i.id} className={style['vehicle-card']}>
      <div className={style.img}>
        <img
          src={i.image}
          alt={i.name}
        />
      </div>
      <h3>{i.name}</h3>
      <p>{i.description}</p>
      <p className={style['prev-reserve']}>
        You can Reserve This Car From:
        <span>{i.city}</span>
      </p>
      <Link className={style['more-btn']} to={`/items/${i.id}`}>more Details</Link>
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <div className={style['vehicle-slider']}>
          <Slider
            dots={settings.dots}
            infinite={settings.infinite}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            autoplay={settings.autoplay}
            autoplaySpeed={settings.autoplaySpeed}
            responsive={settings.responsive}
          >
            {renderItems()}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Vehicles;
