import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/reservations');
    return response.data;
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/reservations/${id}`);
    return response.data;
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.reservations = action.payload;
      })

      .addCase(fetchReservations.rejected, (state) => {
        state.status = 'rejected';
      })

      .addCase(deleteReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.reservations = state.reservations.filter((reservation) => (
          reservation.id !== action.payload.id
        ));
      })
      .addCase(deleteReservation.rejected, (state) => {
        state.status = 'rejected';
      });
  },

});

export const selectAllReservations = (state) => state.reservations.reservations;
export default reservationsSlice.reducer;
