import React, { useState } from "react";
import Modal from "react-modal";
import "./User.css";

Modal.setAppElement("#root");

export const Header = ({user}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
      <img
        src="https://bootdey.com/img/Content/avatar/avatar1.png"
        alt=""
        className="d-block ui-w-100 rounded-circle"
      />
      <div className="media-body ml-5">
        <h4 className="font-weight-bold mb-4">{`${user.lastName} ${user.name}`}</h4>

        <div className="text-muted mb-4">
          <h3>Bio</h3>
          Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum
          primis electram duo, porro principes ei has.
        </div>
      </div>
      <i
        className="fas fa-user-edit edit"
        onClick={() => setModalIsOpen(true)}
      ></i>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.2)" },
          content: {
            width: "50%",
            height: "50%",
            margin: "0 auto",
            marginTop: "50px",
          },
        }}
      >
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
        </form>
        <div>
          <button
            className="btn btn-primary mr-3"
            onClick={() => setModalIsOpen(false)}
          >
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};
