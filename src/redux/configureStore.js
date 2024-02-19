// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import ItemDetailReducer from './ItemDetail';

const store = configureStore({
  reducer: {
    itemDetail: ItemDetailReducer,
  },
});

export default store;
