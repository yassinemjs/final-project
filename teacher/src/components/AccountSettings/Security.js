import React from "react";
import "./AccountSettings.css";

export const Security = () => {
  return (
    <div class="card-body tab-content">
      <div class="tab-pane active" id="security">
        <h6>SECURITY SETTINGS</h6>
        <hr />
        <form>
          <div class="form-group">
            <label class="d-block">Change Password</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your old password"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="New password"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Confirm new password"
            />
          </div>
        </form>
        <hr />
        <form>
          <div class="form-group">
            <label class="d-block">Two Factor Authentication</label>
            <button class="btn btn-info" type="button">
              Enable two-factor authentication
            </button>
            <p class="small text-muted mt-2">
              Two-factor authentication adds an additional layer of security to
              your account by requiring more than just a password to log in.
            </p>
          </div>
        </form>
        <hr />
        <form>
          <div class="form-group mb-0">
            <label class="d-block">Sessions</label>
            <p class="font-size-sm text-secondary">
              This is a list of devices that have logged into your account.
              Revoke any sessions that you do not recognize.
            </p>
            <ul class="list-group list-group-sm">
              <li class="list-group-item has-icon">
                <div>
                  <h6 class="mb-0">San Francisco City 190.24.335.55</h6>
                  <small class="text-muted">
                    Your current session seen in United States
                  </small>
                </div>
                <button class="btn btn-light btn-sm ml-auto" type="button">
                  More info
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};
