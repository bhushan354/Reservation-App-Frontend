// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';

const ITEM_DETAIL = 'ItemData/ItemData/ITEM_DETAIL';
const baseURL = 'http://localhost:3000/api/v1/items';

export const fetchItemDetail = createAsyncThunk(
  ITEM_DETAIL,
  async (itemDetail, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: ITEM_DETAIL, payload: response.data });
  },
);

const initialState = { itemDetail: [] };
const fetchItemDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_DETAIL:
      return {
        ...state,
        itemDetail: action.payload,
      };
    default:
      return state;
  }
};
export default fetchItemDetailReducer;
