import { ADD_CAPTURED, REMOVE_CAPTURED } from "../actions/types";

const INITIAL_STATE = {
  list: [],
};

export const capturedReducer = (state = INITIAL_STATE, action) => {
  const { list } = state;

  switch (action.type) {
    case ADD_CAPTURED:
      list.push(action.payload);

      return { list };

    case REMOVE_CAPTURED:
      const newList = list.filter((item) => item.order !== action.payload);

      return { list: newList };
    default:
      return state;
  }
};
