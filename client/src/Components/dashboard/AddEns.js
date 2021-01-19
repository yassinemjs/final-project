import React, { useState } from 'react';
import { createEns } from '../../actions/prof';
import { connect } from 'react-redux';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from 'mdbreact';

const AddEns = ({ createEns }) => {
  const [formData, setFormData] = useState({
    id_unique: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { id_unique, name, lastName, email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = (e) => {
    e.preventDefault();
    createEns(formData);
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <form>
            <p className='h5 text-center mb-4'>ADD NEW TEACHER</p>
            <div className='grey-text'>
              <MDBInput
                label='Identifiant Unique'
                icon='tag'
                group
                type='text'
                name='id_unique'
                value={id_unique}
                onChange={onChange}
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='name'
                icon='user'
                group
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='lastName'
                icon='user'
                group
                type='text'
                name='lastName'
                value={lastName}
                onChange={onChange}
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='email'
                icon='envelope'
                group
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='password'
                icon='lock'
                group
                name='password'
                value={password}
                onChange={onChange}
                type='password'
                validate
              />
            </div>
            <div className='text-center'>
              <MDBBtn
                outline
                type='submit'
                onClick={onsubmit}
                color='secondary'
              >
                Save
                <MDBIcon far icon='paper-plane' className='ml-1' />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default connect(null, { createEns })(AddEns);
