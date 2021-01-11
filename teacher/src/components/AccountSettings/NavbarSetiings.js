import React from "react";
import { Link } from "react-router-dom";
import "./AccountSettings.css";

export const NavbarSetiings = () => {
  return (
    <div>
      <nav className="nav flex-column nav-pills nav-gap-y-1">
        <Link
          to="/settings"
          //   data-toggle="tab"
          className="nav-item nav-link has-icon nav-link-faded"
        >
          <i class="fas fa-user"></i>
          <span className="ml-3">Profile Information</span>
        </Link>
        <Link
          to="/settings/accountsettings"
          //   data-toggle="tab"
          className="nav-item nav-link has-icon nav-link-faded"
        >
          <i class="fas fa-user-cog"></i>
          <span className="ml-3">Account Settings</span>
        </Link>
        <Link
          to="/settings/security"
          //   data-toggle="tab"
          className="nav-item nav-link has-icon nav-link-faded"
        >
          <i class="fas fa-shield-alt"></i>
          <span className="ml-3">Security Settings</span>
        </Link>
        <Link
          to="/settings/notif"
          //   data-toggle="tab"
          className="nav-item nav-link has-icon nav-link-faded"
        >
          <i class="fas fa-bell"></i>
          <span className="ml-3">Notification Settings</span>
        </Link>
      </nav>
    </div>
  );
};
