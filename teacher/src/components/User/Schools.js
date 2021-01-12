import React, { useState } from "react";
import Modal from "react-modal";
import "./User.css";

Modal.setAppElement("#root");

export const Schools = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>informations</div>
        <div>
          <i
            className="fas fa-edit edit"
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
              <div className="form-group">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="fullNameHelp"
                  placeholder="Enter your fullname"
                  value="Kenneth Valdez"
                />
                <small id="fullNameHelp" className="form-text text-muted">
                  Your name may appear around here where you are mentioned. You
                  can change or remove it at any time.
                </small>
              </div>
              <div className="form-group">
                <label for="bio">Your Bio</label>
                <textarea
                  className="form-control autosize"
                  id="bio"
                  placeholder="Write something about you"
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    resize: "none",
                    height: "62px",
                  }}
                >
                  A front-end developer that focus more on user interface
                  design, a web interface wizard, a connector of awesomeness.
                </textarea>
              </div>
              <div className="form-group">
                <label for="url">URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  placeholder="Enter your website address"
                  value="http://benije.ke/pozzivkij"
                />
              </div>
              <div className="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter your location"
                  value="Bay Area, San Francisco, CA"
                />
              </div>
              <div className="form-group small text-muted">
                All of the fields on this page are optional and can be deleted
                at any time, and by filling them out, you're giving us consent
                to share this data wherever your user profile appears.
              </div>
            </form>
            <div>
              <button
                classNameName="btn btn-primary mr-3"
                onClick={() => setModalIsOpen(false)}
              >
                Save
              </button>
              <button
                classNameName="btn btn-secondary"
                onClick={() => setModalIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="card-body">
        <p>
          Aliquam varius euismod lectus, vel consectetur nibh tincidunt vitae.
          In non dignissim est. Sed eu ligula metus. Vivamus eget quam sit amet
          risus venenatis laoreet ut vel magna. Sed dui ligula, tincidunt in
          nunc eu, rhoncus iaculis nisi.
        </p>
        <p>
          Sed et convallis odio, vel laoreet tellus. Vivamus a leo eu metus
          porta pulvinar. Pellentesque tristique varius rutrum.
        </p>
        <div className="ui-bordered">
          <div className="p-4">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
            Duis ut quam nec mi bibendum finibus et id tortor. Maecenas
            tristique dolor enim, sed tristique sem cursus et. Etiam tempus
            iaculis blandit. Vivamus a justo a elit bibendum pulvinar ut non
            erat. Cras in purus sed leo mattis consequat viverra id arcu.
          </div>
        </div>
      </div>
    </div>
  );
};
