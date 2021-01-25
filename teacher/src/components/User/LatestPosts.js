import React from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../../js/action/PostAction";
import "./User.css";

export const LatestPosts = ({ post }) => {
  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(removePost(post._id));
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading"></div>
      <div className="panel-body">
        <div className="profile__comments">
          <div className="profile-comments__item">
            <div className="profile-comments__controls">
              <i className="fa fa-trash-o" onClick={deletePost}></i>
            </div>
            <div className="profile-comments__avatar">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt="..."
              />
            </div>
            <div className="profile-comments__body">
              <h5 className="profile-comments__sender">
                {post.name} <small> {post.date} </small>
              </h5>
              <div className="profile-comments__content">{post.text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
