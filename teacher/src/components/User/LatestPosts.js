import React from "react";
import "./User.css";

export const LatestPosts = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading"></div>
      <div className="panel-body">
        <div className="profile__comments">
          <div className="profile-comments__item">
            <div className="profile-comments__controls">
              <a href="/">
                <i className="fa fa-share-square-o"></i>
              </a>
              <a href="/">
                <i className="fa fa-edit"></i>
              </a>
              <a href="/">
                <i className="fa fa-trash-o"></i>
              </a>
            </div>
            <div className="profile-comments__avatar">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt="..."
              />
            </div>
            <div className="profile-comments__body">
              <h5 className="profile-comments__sender">
                Richard Roe <small>2 hours ago</small>
              </h5>
              <div className="profile-comments__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                corporis. Voluptatibus odio perspiciatis non quisquam provident,
                quasi eaque officia.
              </div>
            </div>
          </div>
          <div className="profile-comments__item">
            <div className="profile-comments__controls">
              <a href="/">
                <i className="fa fa-share-square-o"></i>
              </a>
              <a href="/">
                <i className="fa fa-edit"></i>
              </a>
              <a href="/">
                <i className="fa fa-trash-o"></i>
              </a>
            </div>
            <div className="profile-comments__avatar">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt="..."
              />
            </div>
            <div className="profile-comments__body">
              <h5 className="profile-comments__sender">
                Richard Roe <small>5 hours ago</small>
              </h5>
              <div className="profile-comments__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                itaque dolor laboriosam dolores magnam mollitia, voluptatibus
                inventore accusamus illo.
              </div>
            </div>
          </div>
          <div className="profile-comments__item">
            <div className="profile-comments__controls">
              <a href="/">
                <i className="fa fa-share-square-o"></i>
              </a>
              <a href="/">
                <i className="fa fa-edit"></i>
              </a>
              <a href="/">
                <i className="fa fa-trash-o"></i>
              </a>
            </div>
            <div className="profile-comments__avatar">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt="..."
              />
            </div>
            <div className="profile-comments__body">
              <h5 className="profile-comments__sender">
                Richard Roe <small>1 day ago</small>
              </h5>
              <div className="profile-comments__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, esse, magni aliquam quisquam modi delectus veritatis est
                ut culpa minus repellendus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
