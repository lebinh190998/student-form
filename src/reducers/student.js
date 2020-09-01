import { ADD_STUDENT, REMOVE_STUDENT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  debugger;

  switch (type) {
    case ADD_STUDENT:
      return [...state, payload];
    case REMOVE_STUDENT:
      return state.filter((student) => student.id !== payload);
    default:
      return state;
  }
}
