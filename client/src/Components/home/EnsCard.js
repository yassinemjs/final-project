import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { updateEns } from '../../actions/prof';
import Alert from '../layout/Alert';
import { useDispatch } from 'react-redux';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBCard,
  MDBIcon,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';

const EnsCard = ({
  prof: {
    _id,
    id_unique,
    name,
    lastName,
    dateOfBirth,
    placeOfBirth,
    cin,
    sexe,
    adresse,
    phone,
    civil_status,
    children,
    email,
    grade,
    level,
    speciality,
    situation,
    status,
    recruitement_date,
    img,
  },
}) => {
  const [titre, setTitre] = useState([]);
  const [lieu, setLieu] = useState([]);
  const [etat, setEtat] = useState([]);
  const [spec, setSpec] = useState([]);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name,
    lastName,
    dateOfBirth,
    placeOfBirth,
    cin,
    sexe,
    adresse,
    phone,
    civil_status,
    children,
    email,
    grade,
    level,
    speciality,
    situation,
    status,
    recruitement_date,
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(updateEns(_id, formData));
  };
  const options_civil_status = [
    { value: 'Marié', label: 'Marié' },
    { value: 'Célibataire', label: 'Célibataire' },
    { value: 'Divorcé', label: 'Divorcé' },
    { value: 'Veuf', label: 'Veuf' },
  ];
  const options_status = [
    { value: 'عون متعاقد', label: 'عون متعاقد' },
    { value: 'متربص', label: 'متربص' },
    { value: 'مترسم', label: 'مترسم' },
    { value: 'مترسم في انتظار القرار', label: 'مترسم في انتظار القرار' },
    { value: 'تثبيت في الرتبة', label: 'تثبيت في الرتبة' },
  ];

  const options_sexe = [
    { value: 'M', label: 'M' },
    { value: 'F', label: 'F' },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const active = modal ? 'is-active' : '';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const gr = await axios.get('api/grade');
    const sp = await axios.get('api/speciality');
    const le = await axios.get('api/level');
    const si = await axios.get('api/situation');
    setTitre(gr.data);
    setSpec(sp.data);
    setEtat(si.data);
    setLieu(le.data);
  }, []);

  return (
    <div
      style={{
        width: '25rem',
        height: '45rem',
      }}
    >
      <MDBCard>
        <div className='round-img'>
          <MDBCardImage
            src='https://www.bootdey.com/img/Content/avatar/avatar6.png'
            alt='MDBCard image cap'
            top
            hover
            overlay='white-slight'
          />
        </div>
        <MDBCardBody>
          <MDBCardTitle tag='h5'>
            <strong>{`${name} ${lastName}`}</strong>
          </MDBCardTitle>
          <MDBListGroup className='my-4 mx-4' style={{ padding: 7 }}>
            <MDBListGroupItem
              tag='h2'
              className='pt-4'
              color='danger'
              style={{ margin: 2 }}
              hover
            >
              <MDBIcon icon='id-card' />
              {` ${id_unique}`}
            </MDBListGroupItem>
            <MDBListGroupItem
              color='primary'
              tag='h4'
              hover
              style={{ margin: 2 }}
            >
              <MDBIcon icon='phone-alt' />
              {phone}
            </MDBListGroupItem>
            <MDBListGroupItem
              color='danger'
              tag='h4'
              style={{ margin: 2 }}
              hover
            >
              <MDBIcon icon='envelope' />
              {` ${email}`}
            </MDBListGroupItem>
            <MDBListGroupItem
              color='primary'
              tag='h4'
              style={{ margin: 2 }}
              hover
            >
              <MDBIcon icon='user-graduate' />
              {` ${!grade ? '' : grade.grade}`}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
        <MDBContainer
          style={{
            margin: 25,
          }}
        >
          <MDBBtn style={{ padding: 20, margin: -5 }} onClick={toggle}>
            <strong>Show details && Update</strong>
          </MDBBtn>
          <div className={`modal ${active}`}>
            <div className='modal-background' />
            <div className='modal-card'>
              <header className='modal-card-head'>
                <p className='modal-card-title'>Teacher details</p>
                <button
                  onClick={toggle}
                  className='delete'
                  aria-label='close'
                />
              </header>
              <section className='modal-card-body'>
                <form className='needs-validation' noValidate>
                  <MDBRow>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterNameEx'
                        className='grey-text'
                      >
                        First name
                      </label>
                      <input
                        value={formData.name}
                        name='name'
                        onChange={onChange}
                        type='text'
                        id='defaultFormRegisterNameEx'
                        className='form-control'
                        placeholder='First name'
                        required
                      />
                      <div className='valid-feedback'>Looks good!</div>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterEmailEx2'
                        className='grey-text'
                      >
                        Last name
                      </label>
                      <input
                        value={formData.lastName}
                        name='lastName'
                        onChange={onChange}
                        type='text'
                        id='defaultFormRegisterEmailEx2'
                        className='form-control'
                        placeholder='Last name'
                        required
                      />
                      <div className='valid-feedback'>Looks good!</div>
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterConfirmEx3'
                        className='grey-text'
                      >
                        Email
                      </label>
                      <input
                        value={formData.email}
                        type='email'
                        onChange={onChange}
                        id='defaultFormRegisterConfirmEx3'
                        className='form-control'
                        name='email'
                        placeholder='Your Email address'
                      />
                      <small id='emailHelp' className='form-text text-muted'>
                        We'll never share your email with anyone else.
                      </small>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        phone
                      </label>
                      <input
                        value={formData.phone}
                        onChange={onChange}
                        type='text'
                        id='defaultFormRegisterPasswordEx4'
                        className='form-control'
                        name='phone'
                        placeholder='phone'
                        required
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Adress
                      </label>
                      <input
                        value={formData.adresse}
                        onChange={onChange}
                        type='text'
                        id='defaultFormRegisterPasswordEx4'
                        className='form-control'
                        name='adresse'
                        placeholder='Adress'
                        required
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Civil Status
                      </label>
                      <Select
                        defaultInputValue={formData.civil_status}
                        options={options_civil_status}
                        onChange={(e) => {
                          setFormData({ ...formData, civil_status: e.value });
                        }}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        children
                      </label>
                      <input
                        onChange={onChange}
                        value={formData.children}
                        type='text'
                        id='defaultFormRegisterPasswordEx4'
                        className='form-control'
                        name='children'
                        placeholder='children'
                        required
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        sexe
                      </label>
                      <Select
                        defaultInputValue={formData.sexe}
                        options={options_sexe}
                        onChange={(e) => {
                          setFormData({ ...formData, sexe: e.value });
                        }}
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Date of Birth
                      </label>
                      <input
                        type='date'
                        placeholder='YYYY-MM-DD'
                        value={formData.dateOfBirth}
                        name='dateOfBirth'
                        onChange={onChange}
                        className='form-control'
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Place of Birth
                      </label>
                      <input
                        onChange={onChange}
                        value={formData.placeOfBirth}
                        type='text'
                        id='defaultFormRegisterPasswordEx4'
                        className='form-control'
                        name='placeOfBirth'
                        placeholder='place of birth'
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <br />
                  <MDBRow>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        speciality
                      </label>
                      <Select
                        defaultInputValue={
                          !formData.speciality
                            ? ''
                            : formData.speciality.speciality
                        }
                        onChange={(e) =>
                          setFormData({ ...formData, speciality: e.value })
                        }
                        options={spec.map((t) => ({
                          value: t._id,
                          label: t.speciality,
                        }))}
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        situation
                      </label>
                      <Select
                        defaultInputValue={
                          !situation ? '' : situation.situation
                        }
                        onChange={(e) =>
                          setFormData({ ...formData, situation: e.value })
                        }
                        options={etat.map((t) => ({
                          value: t._id,
                          label: t.situation,
                        }))}
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Grade
                      </label>
                      <Select
                        defaultInputValue={!grade ? '' : grade.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.value })
                        }
                        options={titre.map((t) => ({
                          value: t._id,
                          label: t.grade,
                        }))}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        level
                      </label>
                      <Select
                        defaultInputValue={!level ? '' : level.level}
                        onChange={(e) =>
                          setFormData({ ...formData, level: e.value })
                        }
                        options={lieu.map((t) => ({
                          value: t._id,
                          label: t.level,
                        }))}
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Status
                      </label>
                      <Select
                        defaultInputValue={formData.status}
                        options={options_status}
                        onChange={(e) => {
                          setFormData({ ...formData, status: e.value });
                        }}
                      />
                    </MDBCol>
                    <MDBCol md='4' className='mb-3'>
                      <label
                        htmlFor='defaultFormRegisterPasswordEx4'
                        className='grey-text'
                      >
                        Recruitement Date
                      </label>
                      <input
                        type='date'
                        defaultInputValue={formData.recruitement_date}
                        placeholder='yyyy-mm-dd'
                        name='recruitement_date'
                        value={formData.recruitement_date}
                        onChange={onChange}
                        className='form-control'
                        required
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn color='primary' onClick={onsubmit} type='submit'>
                    Update prof
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
        </MDBContainer>
      </MDBCard>
    </div>
  );
};

export default EnsCard;
