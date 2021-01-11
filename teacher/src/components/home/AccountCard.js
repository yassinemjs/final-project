import React from "react";
import "./AccountCard.css";

export const AccountCard = () => {
  return (
    <div class="container mb-4">
      <div class="row">
        <div class="col-lg-4 pb-5 content">
          <div class="author-card pb-3 img-card">
            <div class="author-card-profile">
              <div class="author-card-avatar round-img">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Daniel Adams"
                />
              </div>
              <div class="author-card-details">
                <h5 class="author-card-name text-lg">Daniel Adams</h5>
                <span class="author-card-position">
                  Joined February 06, 2017
                </span>
                <button>Go to profile</button>
              </div>
            </div>
          </div>
          <div class="wizard card-position">
            <nav class="list-group list-group-flush">
              <a class="list-group-item active" href="/">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <i class="fa fa-shopping-bag mr-1 text-muted"></i>
                    <div class="d-inline-block font-weight-medium text-uppercase">
                      Orders List
                    </div>
                  </div>
                  <span class="badge badge-secondary">6</span>
                </div>
              </a>
              <a class="list-group-item" href="/">
                <i class="fa fa-user text-muted"></i>Profile Settings
              </a>
              <a class="list-group-item" href="/">
                <i class="fa fa-map-marker text-muted"></i>Addresses
              </a>
              <a class="list-group-item" href="/">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <i class="fa fa-heart mr-1 text-muted"></i>
                    <div class="d-inline-block font-weight-medium text-uppercase">
                      My Wishlist
                    </div>
                  </div>
                  <span class="badge badge-secondary">3</span>
                </div>
              </a>
              <a class="list-group-item" href="/">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <i class="fa fa-tag mr-1 text-muted"></i>
                    <div class="d-inline-block font-weight-medium text-uppercase">
                      My Tickets
                    </div>
                  </div>
                  <span class="badge badge-secondary">4</span>
                </div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
