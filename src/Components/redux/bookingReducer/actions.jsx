import { BOOKING_INFO } from "./actionTypes";

export const bookingInfo = (value) => {
  return {
    type: BOOKING_INFO,
    payload: value,
  };
};
