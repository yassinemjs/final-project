import { POSTS_FAIL, GET_POSTS, REMOVE_POST } from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const getPost = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/post/all');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: POSTS_FAIL,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/post/delete/${id}`);
    dispatch({
      type: REMOVE_POST,
      payload: id,
    });
    dispatch(setAlert('Post deleted', 'success'));
  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};
