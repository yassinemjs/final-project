import { ENS_ERROR, ADD_ENS, GET_TEACHERS } from './types';
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

export const getAllEns = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/prof/all');

    dispatch({
      type: GET_TEACHERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ENS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
