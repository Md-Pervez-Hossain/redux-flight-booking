import { BOOKING_INFO } from "./actionTypes";

const initialState = {
  data: [],
  text: "TEXT",
};
export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_INFO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
