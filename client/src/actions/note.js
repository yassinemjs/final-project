import { GET_NOTES, ADD_NOTE } from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const addNote = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/note', formData);
    console.log(res.data);

    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });
    dispatch(setAlert('Note Added', 'success'));
  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/note/all');
    console.log(res.data);
    dispatch({
      type: GET_NOTES,
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
