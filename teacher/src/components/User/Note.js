import React from "react";
import "./User.css";

export const Note = () => {
  return (
    <React.Fragment>
      <div className="card mb-4">
        <div className="card-header header">
          <div>Note</div>
        </div>
        <div className="card-body">
          <div classNameName="flex">
            <p>person entitled</p>
            <span>14/05/1990</span>
          </div>
          <hr />
          <div classNameName="flex">
            <p>Note</p>
            <span>14/05/1990</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
