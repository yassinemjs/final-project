import React,{useEffect} from "react";
import Calendar from "react-calendar";
import { AccountCard } from "./AccountCard";
import { AddPost } from "./AddPost";
import { Post } from "./Post";
import { Notification } from "./Notification";
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../../js/action/authAction'
import {getPost} from '../../js/action/PostsAction'
import "./Style.css";

export const HomeApp = () => {
                   
               const user=useSelector(state=>state.authReducer.user)
               const auth=useSelector(state=>state.authReducer.auth)
               const loading=useSelector(state=>state.authReducer.loading)
               const posts=useSelector(state=>state.posts.posts)
               const isLoading=useSelector(state=>state.posts.loading)
                   const dispatch=useDispatch()

       useEffect(() => {
           
        
       dispatch(loadUser())
       dispatch(getPost())
       
      }, []) 


      if(loading || !user ){
        return (".....loading")
      }
      if(isLoading || !posts ){
        return (".....loading")
      }
    
     if(!user ){
       return "user not found"
     }
     if(!posts ){
      return "posts not found"
    }

  return (
    <div className="container gedf-wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="profile-card">
            <AccountCard user={user} />
          </div>
        </div>
        <div className="col-md-6 gedf-main">
          <AddPost />
         {posts[0].map(posts=> (<Post posts={posts} userId={user._id} />) )}
          
        </div>
        <div className=" calendre-profile">
          <Calendar />
          <Notification />
        </div>
      </div>
    </div>
  );
};
