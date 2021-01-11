import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const ProfileNav = () => {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div>
          <div className="navbar-header">
            <Link className="navbar-brand" to="/profile">
              <i className="fa fa-cube"></i>Brand<b>Name</b>
            </Link>
            <button
              type="button"
              data-target="#navbarCollapse"
              data-toggle="collapse"
              className="navbar-toggle"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>
        <div>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="/"
                  data-toggle="dropdown"
                  className="dropdown-toggle user-action"
                >
                  <img
                    src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                    className="avatar"
                    alt="Avatar"
                  />
                  Paula Wilson <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/user">
                      <i className="fa fa-user-o"></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/user">
                      <i className="fa fa-user-o"></i> Account Settings
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="/">
                      <i className="material-icons">&#xE8AC;</i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ProfileNav;
