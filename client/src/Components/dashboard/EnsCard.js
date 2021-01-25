import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { updateEns } from '../../actions/prof';
import { useDispatch } from 'react-redux';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBCard,
  MDBIcon,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage,
  MDBCardBody,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
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
        maxWidth: '35rem',
        maxHeight: '50',
        padding: '1rem',
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
          <MDBCardTitle tag='h5'>{`${name} ${lastName}`}</MDBCardTitle>
          <MDBListGroup className='my-4 mx-4' style={{ width: '25' }}>
            <MDBListGroupItem tag='h3' className='pt-2' color='danger' hover>
              <MDBIcon icon='id-card' />
              {id_unique}
            </MDBListGroupItem>
            <MDBListGroupItem color='dark' tag='h5' hover>
              <MDBIcon icon='phone-alt' />
              {phone}
            </MDBListGroupItem>
            <MDBListGroupItem color='primary' tag='h4' hover>
              <MDBIcon icon='envelope' />
              {email}
            </MDBListGroupItem>
            <MDBListGroupItem color='primary' tag='h4' hover>
              <MDBIcon icon='user-graduate' />
              {!grade ? '' : grade.grade}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
        <MDBContainer
          style={{
            margin: '1rem',
          }}
        >
          <MDBBtn onClick={toggle}>Show details && Update</MDBBtn>
          <MDBModal
            className='modal-dialog modal-xl'
            isOpen={modal}
            toggle={toggle}
          >
            <MDBModalHeader toggle={toggle}>ENSEIGNANT INFOS</MDBModalHeader>
            <MDBModalBody>
              {' '}
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
                      defaultInputValue={!situation ? '' : situation.situation}
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
                        label: t.leve,
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
                <MDBCol md='4' className='mb-3'>
                  <div className='custom-control custom-checkbox pl-3'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      value=''
                      id='invalidCheck'
                      required
                    />
                    <label
                      className='custom-control-label'
                      htmlFor='invalidCheck'
                    >
                      Agree to terms and conditions
                    </label>
                    <div className='invalid-feedback'>
                      You must agree before submitting.
                    </div>
                  </div>
                </MDBCol>
                <MDBBtn color='primary' onClick={onsubmit} type='submit'>
                  Update prof
                </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggle}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </MDBCard>
    </div>
  );
};

export default EnsCard;
