import React from "react";
import { LatestPosts } from "./LatestPosts";
import "./User.css";

export const GetPosts = () => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Latest Posts</div>
      </div>
      <div className="card-body">
        <LatestPosts />
      </div>
    </div>
  );
};
