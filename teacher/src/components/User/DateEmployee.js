import React from "react";
import "./User.css";

export const DateEmployee = () => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Date related to employee</div>
      </div>
      <div className="card-body">
        <div className="flex">
          <p>promotion date</p>
          <span>14/05/1990</span>
        </div>
        <hr />
        <div className="flex">
          <p>confirmation date</p>
          <span>14/05/1990</span>
        </div>
        <hr />
        <div className="flex">
          <p>Recruitment date</p>
          <span>14/05/1990</span>
        </div>
        <hr />
        <div className="flex">
          <p>date of entitled</p>
          <span>14/05/1990</span>
        </div>
      </div>
    </div>
  );
};
