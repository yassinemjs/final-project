import { GET_NOTES, ADD_NOTE, NOTE_ERROR } from '../actions/types';

const initialState = {
  notes: null,
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
    case NOTE_ERROR:
      return { loading: false, error: payload };
    default:
      return state;
  }
}
