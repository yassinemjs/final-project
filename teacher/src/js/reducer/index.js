import {combineReducers} from 'redux'
import alert  from './Alert.js'
import authReducer from './AuthReducer'


const rootReducer= combineReducers({
     
    alert ,
    authReducer,
})


export default  rootReducer 