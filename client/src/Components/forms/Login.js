import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import Alert from '../layout/Alert';
import Drap from '../asset/drap.png';
import Couv from '../asset/name.png';
import Slide1 from '../asset/slide.jpg';
import Slide2 from '../asset/slide2.jpg';
import Slide3 from '../asset/slide3.jpg';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;
  const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <>
      <div>
        <Alert />
      </div>
      <MDBContainer
        style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
      >
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className='form-header deep-blue-gradient rounded'>
                  <h3 className='my-3'>
                    <img src={Drap} alt='drap' />
                    <img src={Couv} alt='couverture' />
                  </h3>
                </MDBCardHeader>
                <form onSubmit={onSubmit}>
                  <div className='grey-text'>
                    <MDBInput
                      label='البريد الإلكتروني'
                      icon='envelope'
                      group
                      type='email'
                      name='email'
                      onChange={onchange}
                      validate
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='كلمة العبور'
                      icon='lock'
                      group
                      type='password'
                      name='password'
                      onChange={onchange}
                      validate
                      error='wrong'
                      success='right'
                    />
                  </div>

                  <div className='text-center mt-4'>
                    <MDBBtn color='light-blue' className='mb-3' type='submit'>
                      موافق
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className='font-weight-light'>
                    <MDBContainer>
                      <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={false}
                        className='z-depth-1'
                        slide
                      >
                        <MDBCarouselInner>
                          <MDBCarouselItem itemId='1'>
                            <MDBView>
                              <img
                                className='d-block '
                                style={{ width: '30em', height: '5em' }}
                                src={Slide1}
                                alt='First slide'
                              />
                            </MDBView>
                          </MDBCarouselItem>
                          <MDBCarouselItem itemId='2'>
                            <MDBView>
                              <img
                                className='d-block '
                                style={{ width: '30em', height: '5em' }}
                                src={Slide2}
                                alt='Second slide'
                              />
                            </MDBView>
                          </MDBCarouselItem>
                          <MDBCarouselItem itemId='3'>
                            <MDBView>
                              <img
                                className='d-block '
                                style={{ width: '30em', height: '5em' }}
                                src={Slide3}
                                alt='Third slide'
                              />
                            </MDBView>
                          </MDBCarouselItem>
                        </MDBCarouselInner>
                      </MDBCarousel>
                    </MDBContainer>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Login;
