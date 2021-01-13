
import {LOGIN_FAIL,LOGIN_SUCCES} from './Type'
import axios from 'axios'
import {setAlert} from './Alert'

export const loginSucces=(form)=> async dispatch =>{
    
    try {
        const res= await axios.post("http://localhost:4000/api/prof/auth",form)
        

        dispatch({
            type:LOGIN_SUCCES,
            payload :res.data
        })
        
    } catch (err) {
        
        const error=err.response.data
        
        if(Array.isArray(error)){
            error.forEach(err=> dispatch(setAlert(err.msg,"alert alert-danger text-center")))
        }

        dispatch({
            type:LOGIN_FAIL,

        })
        
    }

}