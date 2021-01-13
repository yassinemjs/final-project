import React from "react";
import "./Style.css";

export const Notification = () => {
  return (
    <div className="card gedf-card mt-3">
      <div className="card-body">
        <h5 className="card-title">Notifications</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="card-link">
          Card link
        </a>
        <a href="/" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};
