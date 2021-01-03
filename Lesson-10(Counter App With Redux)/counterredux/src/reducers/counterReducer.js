import { Counter } from "../Counter";
import { INCREASE_COUNT, DECREASE_COUNT } from "../actions/actionTypes";

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { count: state.count + 1 };
    case DECREASE_COUNT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
