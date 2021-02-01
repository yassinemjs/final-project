import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBAlert } from 'mdbreact';
import Header from '../layout/Header';
import EnsList from './EnsList';
import { getAllEns } from '../../actions/prof';
import '../../App.css';

const Home = () => {
  const teachers = useSelector((state) => state.prof.teachers);
  const loading = useSelector((state) => state.prof.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEns());
  }, [dispatch]);

  if (loading || !teachers) {
    return <MDBAlert color='primary'>....Loading</MDBAlert>;
  }

  return (
    <Fragment>
      <Header title='Teachers Cards' />
      <div className='container px-2'>
        <EnsList
          data={teachers}
          itemsPerPage={6}
          searchByData={[
            { label: 'Search by Id unique', value: 'Id_unique' },
            { label: 'Search by name', value: 'name' },
            { label: 'Search by lastName', value: 'lastName' },
          ]}
        />
      </div>
    </Fragment>
  );
};

export default Home;
