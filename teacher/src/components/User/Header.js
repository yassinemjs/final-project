import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./User.css";

Modal.setAppElement("#root");

export const Header = ({ user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    adresse: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    children: "",
    civil_status: "",
  });

  const oldEnseignant = {
    name: user.name,
    lastName: user.lastName,
    adresse: user.adresse,
    phone: user.phone,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    placeOfBirth: user.placeOfBirth,
    children: user.children,
    civil_status: user.civil_status,
  };
  useEffect(() => {
    oldEnseignant
      ? setForm(oldEnseignant)
      : setForm({
          name: "",
          lastName: "",
          adresse: "",
          phone: "",
          // email: "",
          dateOfBirth: "",
          placeOfBirth: "",
          children: "",
          civil_status: "",
        });
  }, [modalIsOpen, oldEnseignant]);

  const [startDate, setStartDate] = useState(new Date());
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
          <p>Adresse : {user.adresse}</p>
          <p>Phone : {user.phone}</p>
          <p>Email : {user.email}</p>
          <p>Birthday : {`${user.dateOfBirth} - ${user.placeOfBirth}`}</p>
          <p>Number of children : {user.children}</p>
          <p>Civil status : {user.civil_status}</p>
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
          <div className="form-group">
            <label className="mt-3">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your lastName"
              name="lastName"
              value={form.lastName}
            />
            <br />
            <label className="mt-3">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your firstName"
              name="name"
              value={form.name}
            />
            <br />
            <label for="fullName">Date of Birthday</label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd/MM/yyyy"
            />
            <br />
            <label className="mt-3">Birthplace</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your birthplace"
            />
            <label className="mt-3">Adress</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your adress"
              name="adresse"
              value={form.adresse}
            />
            <label className="mt-3">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              name="phone"
              value={form.phone}
            />
            <label className="mt-3">Number of children</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your"
              name="children"
              value={form.children}
            />
            <label className="mt-3">Civil status</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your civil status"
              name="civil_status"
              value={form.civil_status}
            />
          </div>
        </form>
        <div>
          <button
            className="btn btn-primary btn-block"
            onClick={() => setModalIsOpen(false)}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};
