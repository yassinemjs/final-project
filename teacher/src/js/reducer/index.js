import {combineReducers} from 'redux'
import alert  from './Alert.js'
import authReducer from './AuthReducer'
import posts from './PostsReducer'

const rootReducer= combineReducers({
     
    alert ,
    authReducer,
    posts,
})


export default  rootReducer 