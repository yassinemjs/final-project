import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, addNote } from '../../actions/note';
import Select from 'react-select';
import { MDBDataTable, MDBAlert, MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import Header from '../layout/Header';
import axios from 'axios';
import Alert from '../layout/Alert';

const Note = () => {
  const [formData, setFormData] = useState({
    enseignant: '',
    inspector: '',
    nature: '',
    note: '',
  });
  const { enseignant, inspector, nature, note } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const notes = useSelector((state) => state.note.notes);
  const loading = useSelector((state) => state.note.loading);
  const dispatch = useDispatch();

  const [inspecteur, setInspecteur] = useState([]);
  const [ens, setEns] = useState([]);
  const [modal, setModal] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(formData));
    console.log(formData);
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const insp = await axios.get('api/inspecteur');
    const prof = await axios.get('api/prof/all');
    setInspecteur(insp.data);
    setEns(prof.data);
  }, []);
  const options_nature = [
    { value: 'Inspection', label: 'Inspection' },
    { value: 'Visite', label: 'Visite' },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const active = modal ? 'is-active' : '';

  if (loading || !notes) {
    return <MDBAlert color='success'>....Loading</MDBAlert>;
  }

  let noteEns = notes.map((note) => ({
    ...note,
    id_unique: note.enseignant ? note.enseignant.id_unique : '',
    name: note.enseignant ? note.enseignant.name : '',
    lastName: note.enseignant ? note.enseignant.lastName : '',
    date: note.date.slice(0, 10),
    inspector: note.inspector ? note.inspector.inspector : '',
  }));

  const data = {
    columns: [
      {
        label: 'Id unique',
        field: 'id_unique',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Inspecteur',
        field: 'inspector',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'note',
        field: 'note',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Nature',
        field: 'nature',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'date',
        field: 'date',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: noteEns,
  };

  return (
    <div>
      <Header title='Teachers Inspection' />
      <MDBBtn style={{ padding: 20, margin: 20 }} onClick={toggle}>
        <strong>Add Note</strong>
      </MDBBtn>
      <div className={`modal ${active}`}>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Note or Inspection's Teacher</p>
            <button onClick={toggle} className='delete' aria-label='close' />
          </header>
          <section className='modal-card-body'>
            <form className='needs-validation' onSubmit={onsubmit} noValidate>
              <MDBRow>
                <MDBCol md='6' className='mb-6'>
                  <label
                    htmlFor='defaultFormRegisterNameEx'
                    className='grey-text'
                  >
                    enseignant
                  </label>
                  <Select
                    defaultInputValue={enseignant}
                    onChange={(e) =>
                      setFormData({ ...formData, enseignant: e.value })
                    }
                    options={ens.map((prof) => ({
                      value: prof._id,
                      label: prof.id_unique,
                    }))}
                  />
                  <div className='valid-feedback'>Looks good!</div>
                </MDBCol>
                <MDBCol md='6' className='mb-6'>
                  <label
                    htmlFor='defaultFormRegisterEmailEx2'
                    className='grey-text'
                  >
                    Inspector
                  </label>
                  <Select
                    defaultInputValue={inspector}
                    onChange={(e) =>
                      setFormData({ ...formData, inspector: e.value })
                    }
                    options={inspecteur.map((inspec) => ({
                      value: inspec._id,
                      label: inspec.inspector,
                    }))}
                  />
                  <div className='valid-feedback'>Looks good!</div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='6' className='mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'
                  >
                    Note
                  </label>
                  <input
                    value={note}
                    onChange={onChange}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='note'
                    placeholder='note'
                    required
                  />
                </MDBCol>
                <MDBCol md='6' className='mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'
                  >
                    Nature
                  </label>
                  <Select
                    defaultInputValue={nature}
                    options={options_nature}
                    onChange={(e) => {
                      setFormData({ ...formData, nature: e.value });
                    }}
                  />
                </MDBCol>
              </MDBRow>

              <MDBBtn color='success' type='submit'>
                Save
              </MDBBtn>
              <Alert />
            </form>
          </section>
          <footer className='modal-card-foot'>
            <button onClick={toggle} className='button'>
              Cancel
            </button>
          </footer>
        </div>
      </div>
      <MDBDataTable striped bordered small data={data} />
    </div>
  );
};

export default Note;
