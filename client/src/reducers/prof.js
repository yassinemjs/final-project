import { ENS_ERROR, ADD_ENS, GET_TEACHERS } from '../actions/types';

const initialState = {
  teachers: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ENS:
      return {
        ...state,
        teachers: [...state.teachers, payload],
        loading: false,
      };
    case GET_TEACHERS:
      return { ...state, teachers: payload, loading: false };

    case ENS_ERROR:
      return { loading: false, error: payload };
    default:
      return state;
  }
}
