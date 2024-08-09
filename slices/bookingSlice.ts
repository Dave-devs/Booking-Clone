import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface BookingState {
    hotel: any[]
}

const initialState: BookingState = {
    hotel: []
}

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
            state.hotel.push(action.payload)
        },
    removeFromFavourite: (state, action) => {
            state.hotel = state.hotel.filter((item) => item.id !== action.payload.id)
        }
  },
});

export const { addToFavourite, removeFromFavourite } = bookingSlice.actions;
export const selectBooking = (state: RootState) => state.booking;
export default bookingSlice.reducer;