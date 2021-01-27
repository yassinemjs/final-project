import { GET_NOTES, ADD_NOTE } from '../actions/types';

const initialState = {
  notes: [],
  loading: true,
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTES:
      return { ...state, notes: payload, loading: false };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
        loading: false,
      };
    default:
      return state;
  }
}
