import {LOGIN_FAIL,LOGIN_SUCCES,USER_FAIL,USER_SUCCES,LOGOUT} from '../action/Type'

const initialState= {
    token:localStorage.getItem('token'),
    loading:true,
    auth:false,
    user:[],
}

const reducer =(state=initialState,action)=>{

       const {payload}=action
       switch(action.type){
             
           case USER_SUCCES:
            
               return {...state,user:[payload],auth:true,loading:false}

           case LOGIN_SUCCES:
               localStorage.setItem('token',payload.token)
               return {...state,loading:false,auth:true}
               
               case LOGOUT:
               case USER_FAIL:
               case LOGIN_FAIL:
                 localStorage.removeItem('token')
                 return {...state,loading:false,user:[],auth:false}  

                 default :
                 return state 
       }
}



export default reducer