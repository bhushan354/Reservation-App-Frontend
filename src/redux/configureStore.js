// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth';
import ItemReducer from './Item';
import ItemDetailReducer from './ItemDeatils';
import reservationsReducer from './reservationsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    item: ItemReducer,
    itemDetail: ItemDetailReducer,
    reservations: reservationsReducer,
  },
});

export default store;
