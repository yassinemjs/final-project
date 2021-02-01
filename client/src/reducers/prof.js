import {
  ENS_ERROR,
  ADD_ENS,
  UPDATE_ENS,
  GET_TEACHERS,
  GET_TEACHER,
  FILTER_GRADE,
  FILTER_LEVEL,
  FILTER_SITUATION,
  FILTER_SPECIALITY,
  CLEAR_PROF,
} from '../actions/types';

const initialState = {
  teachers: [],
  profs: [],
  teacher: null,
  loading: true,
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ENS:
    case UPDATE_ENS:
      return {
        ...state,
        teachers: [...state.teachers, payload],
        loading: false,
      };
    case GET_TEACHERS:
      return { ...state, teachers: payload, loading: false };
    case GET_TEACHER:
      return { ...state, loading: false, teacher: payload };
    case ENS_ERROR:
      return { loading: false, error: payload };
    case FILTER_GRADE:
      return payload
        ? {
            ...state,
            profs: state.teachers
              .filter((el) => el.grade != null)
              .filter((el) => el.grade._id === payload),
          }
        : state;
    case FILTER_SITUATION:
      return payload
        ? {
            ...state,
            profs: state.teachers
              .filter((el) => el.situation != null)
              .filter((el) => el.situation._id === payload),
          }
        : state;
    case FILTER_LEVEL:
      return payload
        ? {
            ...state,
            profs: state.teachers
              .filter((el) => el.level != null)
              .filter((el) => el.level._id === payload),
          }
        : state;
    case FILTER_SPECIALITY:
      return payload
        ? {
            ...state,
            profs: state.teachers
              .filter((el) => el.speciality != null)
              .filter((el) => el.speciality._id === payload),
          }
        : state;
    case CLEAR_PROF:
      return { ...state, profs: [], loading: false };
    default:
      return state;
  }
}
