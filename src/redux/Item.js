// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';

const ITEM = 'Item/Item/ITEM';
const baseURL = 'http://localhost:3000/api/v1/items';

export const fetchItem = createAsyncThunk(
  ITEM,
  async (__, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: ITEM, payload: response.data });
  },
);

const initialState = { item: [] };
const fetchItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
export default fetchItemReducer;
