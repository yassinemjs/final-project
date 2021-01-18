import { EDIT_TEACHER } from "./Type";
import axios from "axios";

export const editTeacherById = (id, FormData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/prof/${id}`, FormData);
    dispatch({
      type: EDIT_TEACHER,
      payload: res.data,
    });
    alert("edit user");
  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err));
    }
  }
};
