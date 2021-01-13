import {LOGIN_FAIL,LOGIN_SUCCES} from '../action/Type'

const initialState= {
    token:localStorage.getItem('token'),
    loading:true,
    auth:false,
    user:null,
}

const reducer =(state=initialState,action)=>{

       const {payload}=action
       switch(action.type){
           case LOGIN_SUCCES:
               localStorage.setItem('token',payload.token)
               return {...state,user:payload.profile,loading:false,auth:true}
               
               case LOGIN_FAIL:
                 localStorage.removeItem('token')
                 return {...state,loading:false,token:null}  

                 default :
                 return state 
       }
}



export default reducer