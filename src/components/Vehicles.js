import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetail } from '../redux/ItemDetail';

const Vehicles = () => {
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.itemDetail);
  useEffect(() => {
    dispatch(fetchItemDetail()).unwrap();
  }, []);
  return (
    <div>
      <h1>Vechicles</h1>
      {console.log(itemData, 'umair')}
    </div>
  );
};

export default Vehicles;
