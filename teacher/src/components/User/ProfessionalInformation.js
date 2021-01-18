import React from "react";
import "./User.css";

export const ProfessionalInformation = () => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Professional Information</div>
      </div>
      <div className="card-body">
        <div className="flex">
          <p>Grade</p>
          <span>14/05/1990</span>
        </div>
        <hr />
        <div className="flex">
          <p>Level</p>
          <span>14/05/1990</span>
        </div>
        <hr />
        <div className="flex">
          <p>Speciality</p>
          <span>14/05/1990</span>
        </div>
        <hr />
        <div className="flex">
          <p>Situation</p>
          <span>14/05/1990</span>
        </div>
      </div>
    </div>
  );
};
