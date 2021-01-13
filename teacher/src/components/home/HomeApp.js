import React from "react";
import Calendar from "react-calendar";
import { AccountCard } from "./AccountCard";
import { AddPost } from "./AddPost";
import { Post } from "./Post";
import { Notification } from "./Notification";
import "./Style.css";

export const HomeApp = () => {
  return (
    <div className="container gedf-wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="card profile-card">
            <AccountCard />
          </div>
        </div>
        <div className="col-md-6 gedf-main">
          <AddPost />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="col-md-3 calendre-profile">
          <Calendar />
          <Notification />
        </div>
      </div>
    </div>
  );
};
