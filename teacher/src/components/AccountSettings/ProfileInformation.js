import React from "react";
import "./AccountSettings.css";

export const ProfileInformation = () => {
  return (
    <div class="card-body tab-content">
      <div class="tab-pane active" id="profile">
        <h6>YOUR PROFILE INFORMATION</h6>
        <hr />
        <form>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              aria-describedby="fullNameHelp"
              placeholder="Enter your fullname"
              value="Kenneth Valdez"
            />
            <small id="fullNameHelp" class="form-text text-muted">
              Your name may appear around here where you are mentioned. You can
              change or remove it at any time.
            </small>
          </div>
          <div class="form-group">
            <label for="bio">Your Bio</label>
            <textarea
              class="form-control autosize"
              id="bio"
              placeholder="Write something about you"
              style={{
                overflow: "hidden",
                overflowWrap: "break-word",
                resize: "none",
                height: "62px",
              }}
            >
              A front-end developer that focus more on user interface design, a
              web interface wizard, a connector of awesomeness.
            </textarea>
          </div>
          <div class="form-group">
            <label for="url">URL</label>
            <input
              type="text"
              class="form-control"
              id="url"
              placeholder="Enter your website address"
              value="http://benije.ke/pozzivkij"
            />
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder="Enter your location"
              value="Bay Area, San Francisco, CA"
            />
          </div>
          <div class="form-group small text-muted">
            All of the fields on this page are optional and can be deleted at
            any time, and by filling them out, you're giving us consent to share
            this data wherever your user profile appears.
          </div>
          <button type="button" class="btn btn-primary">
            Update Profile
          </button>
          <button type="reset" class="btn btn-light">
            Reset Changes
          </button>
        </form>
      </div>
    </div>
  );
};
