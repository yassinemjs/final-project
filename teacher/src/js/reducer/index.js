import { combineReducers } from "redux";
import alert from "./Alert.js";
import authReducer from "./AuthReducer";
import posts from "./PostsReducer";
import post from "./PostReducer";
import messages from "./Message";

const rootReducer = combineReducers({
  alert,
  authReducer,
  posts,

  messages,
});

export default rootReducer;
