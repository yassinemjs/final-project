import React from "react";
import { Link } from "react-router-dom";
import "./AccountCard.css";

export const AccountCard = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-lg-4 pb-5 content">
          <div className="author-card pb-3 img-card">
            <div className="author-card-profile">
              <div className="author-card-avatar round-img">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Daniel Adams"
                />
              </div>
              <div className="author-card-details">
                <h5 className="author-card-name text-lg">Daniel Adams</h5>
                <span className="author-card-position">
                  Joined February 06, 2017
                </span>
              </div>
            </div>
          </div>
          <div className="wizard card-position">
            <nav className="list-group list-group-flush">
              <Link className="list-group-item" to="/settings">
                <i className="fa fa-user text-muted"></i>Profile Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
