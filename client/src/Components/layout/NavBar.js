import React, { Fragment, useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdbreact';

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const authLinks = (
    <MDBNavbar color='default-color' dark expand='md'>
      <MDBNavbarBrand>
        <img src={Logo} />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to='/home'>
              <MDBIcon icon='home' />
              <strong>Home</strong>{' '}
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/filter'>
              <MDBIcon icon='filter' />
              <strong>Filter</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='addEns'>
              <MDBIcon far icon='plus-square' />
              <strong>Add Enseignant</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/update'>
              <MDBIcon far icon='edit' />
              <strong>Update</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='#!'>
              <MDBIcon icon='file-signature' />
              <strong>Posts</strong>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <a onClick={logout}>
            <i class='fas fa-sign-out-alt'></i>
            <strong>Logout</strong>{' '}
          </a>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );

  const guestLinks = (
    <MDBNavbar color='default-color' dark expand='md'>
      <MDBNavbarBrand>
        <img src={Logo} />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavLink to='/login'>
            <MDBIcon icon='user' />
            <strong>Login</strong>{' '}
          </MDBNavLink>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );

  return (
    !loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
