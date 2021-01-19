import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from 'mdbreact';

const EnsCard = ({ prof: { id_unique, name, lastName, email } }) => {
  return (
    <div className='card' className='card-body'>
      <MDBContainer>
        <MDBListGroup className='my-4 mx-4' style={{ width: '40rm' }}>
          <MDBListGroupItem color='primary'>
            Id unique: {id_unique}
          </MDBListGroupItem>
          <MDBListGroupItem color='primary'>name: {name}</MDBListGroupItem>
          <MDBListGroupItem color='primary'>
            lastname : {lastName}{' '}
          </MDBListGroupItem>
          <MDBListGroupItem color='primary'>email: {email}</MDBListGroupItem>
        </MDBListGroup>
      </MDBContainer>
      <button type='button' class='btn btn-primary'>
        Show details
      </button>
    </div>
  );
};

export default EnsCard;
