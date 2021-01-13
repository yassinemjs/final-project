import React from "react";
import "./Style.css";

export const AddPost = () => {
  return (
    <div className="card gedf-card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              Make a publication
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Images
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="form-group">
              <label className="sr-only" for="message">
                post
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="What are you thinking?"
              ></textarea>
            </div>
          </div>
          <div className="tab-pane fade">
            <div className="form-group">
              <div className="custom-file">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label" for="customFile">
                  Upload image
                </label>
              </div>
            </div>
            <div className="py-4"></div>
          </div>
        </div>
        <div className="btn-toolbar justify-content-between">
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              share
            </button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-link dropdown-toggle">
              <i className="fa fa-globe"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="/">
                <i className="fa fa-globe"></i> Public
              </a>
              <a className="dropdown-item" href="/">
                <i className="fa fa-users"></i> Friends
              </a>
              <a className="dropdown-item" href="/">
                <i className="fa fa-user"></i> Just me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
