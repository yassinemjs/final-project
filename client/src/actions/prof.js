import {
  ENS_ERROR,
  ADD_ENS,
  GET_TEACHERS,
  GET_TEACHER,
  UPDATE_ENS,
  FILTER_GRADE,
  FILTER_LEVEL,
  FILTER_SITUATION,
  FILTER_SPECIALITY,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const createEns = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:4000/api/prof', formData);
    console.log(res.data);

    dispatch({
      type: ADD_ENS,
      payload: res.data,
    });
    dispatch(setAlert('Teacher Created', 'success'));
  } catch (error) {
    dispatch({
      type: ENS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const updateEns = (id, formData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/prof/${id}`, formData);

    dispatch({
      type: UPDATE_ENS,
      payload: res.data,
    });
    dispatch(setAlert('Teacher updated', 'success'));
    dispatch(getAllEns());
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const getAllEns = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/prof/all');
    console.log(res.data);
    dispatch({
      type: GET_TEACHERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const getProf = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/prof/${id}`);

    dispatch({
      type: GET_TEACHER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ENS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const filterGrade = (grade) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_GRADE,
      payload: grade,
    });
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const filterLevel = (level) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_LEVEL,
      payload: level,
    });
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const filterSpeciality = (spec) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_SPECIALITY,
      payload: spec,
    });
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const filterSituation = (situation) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_SITUATION,
      payload: situation,
    });
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};
