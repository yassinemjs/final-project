import { EDIT_TEACHER } from "./Type";
import axios from "axios";

export const editTeacherById = (id, FormData) => (dispatch) => {
  axios.put(`/api/prof/${id}`, FormData).then();
};
