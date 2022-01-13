import { ADD_CAPTURED, REMOVE_CAPTURED } from "./types";

export const addCaptured = (captured) => ({
  type: ADD_CAPTURED,
  payload: captured,
});

export const removeCaptured = (captured) => ({
  type: REMOVE_CAPTURED,
  payload: captured,
});
