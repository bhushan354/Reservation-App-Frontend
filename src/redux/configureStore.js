// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './Item';
import ItemDetailReducer from './ItemDeatils';

const store = configureStore({
  reducer: {
    item: ItemReducer,
    itemDetail: ItemDetailReducer,
  },
});

export default store;
