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
       <button className='btn btn-primary btn-block'>Update</button>
      </div>
    </div>
  );
};
