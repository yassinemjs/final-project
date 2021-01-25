import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
} from 'mdbreact';

const ModalEns = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}>Show details</MDBBtn>
      <MDBModal
        className='modal-dialog modal-xl'
        isOpen={modal}
        toggle={toggle}
      >
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          {' '}
          <form className='needs-validation' onSubmit='' noValidate>
            <MDBRow>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterNameEx'
                  className='grey-text'
                >
                  First name
                </label>
                <input
                  value='name'
                  name='name'
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
                  value=''
                  name='lname'
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
                  value=''
                  type='email'
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
                  City
                </label>
                <input
                  value=''
                  type='text'
                  id='defaultFormRegisterPasswordEx4'
                  className='form-control'
                  name='city'
                  placeholder='City'
                  required
                />
                <div className='invalid-feedback'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterPasswordEx4'
                  className='grey-text'
                >
                  State
                </label>
                <input
                  value=''
                  type='text'
                  id='defaultFormRegisterPasswordEx4'
                  className='form-control'
                  name='state'
                  placeholder='State'
                  required
                />
                <div className='invalid-feedback'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterPasswordEx4'
                  className='grey-text'
                >
                  Zip
                </label>
                <input
                  value=''
                  type='text'
                  id='defaultFormRegisterPasswordEx4'
                  className='form-control'
                  name='zip'
                  placeholder='Zip'
                  required
                />
                <div className='invalid-feedback'>
                  Please provide a valid zip.
                </div>
                <div className='valid-feedback'>Looks good!</div>
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
                <label className='custom-control-label' htmlFor='invalidCheck'>
                  Agree to terms and conditions
                </label>
                <div className='invalid-feedback'>
                  You must agree before submitting.
                </div>
              </div>
            </MDBCol>
            <MDBBtn color='primary' type='submit'>
              Submit Form
            </MDBBtn>
          </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color='primary'>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ModalEns;
