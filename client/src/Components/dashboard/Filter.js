import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Header from '../layout/Header';
import {
  getAllEns,
  filterGrade,
  filterLevel,
  filterSituation,
  filterSpeciality,
  profClear,
} from '../../actions/prof';

import { useDispatch, useSelector } from 'react-redux';
import { MDBDataTable, MDBAlert, MDBBtn, MDBRow, MDBCol } from 'mdbreact';

const Filter = () => {
  const [grade, setGrade] = useState([]);
  const [level, setLevel] = useState([]);
  const [situation, setSituation] = useState([]);
  const [speciality, setSpeciality] = useState([]);

  const profs = useSelector((state) => state.prof.profs);
  const teachers = useSelector((state) => state.prof.teachers);
  const loading = useSelector((state) => state.prof.loading);
  const dispatch = useDispatch();

  const [grd, setGrd] = useState('');
  const [sit, setSit] = useState('');
  const [spec, setSpec] = useState('');
  const [lev, setLev] = useState('');
  const reset = () => {
    dispatch(profClear());
  };

  useEffect(() => {
    dispatch(getAllEns());
  }, [dispatch]);
  console.log(teachers);

  const data = {
    columns: [
      {
        label: 'Id_unique',
        field: 'id_unique',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'LastName',
        field: 'lastName',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'sexe',
        field: 'sexe',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: profs.length > 0 ? profs : teachers,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const gr = await axios.get('api/grade');
    const sp = await axios.get('api/speciality');
    const le = await axios.get('api/level');
    const si = await axios.get('api/situation');
    setGrade(gr.data);
    setSpeciality(sp.data);
    setSituation(si.data);
    setLevel(le.data);
  }, []);

  if (loading || !teachers) {
    return <MDBAlert color='success'>....Loading</MDBAlert>;
  }

  return (
    <div className='filter'>
      <Header title='Teachers  Statistics' />
      <form
        className='needs-validation'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(filterGrade(grd));
          dispatch(filterLevel(lev));
          dispatch(filterSituation(sit));
          dispatch(filterSpeciality(spec));
        }}
        noValidate
      >
        <MDBRow>
          <MDBCol md='6' className='mb-3'>
            <label className='text-info'>By Grade</label>
            <Select
              options={grade.map((t) => ({ value: t._id, label: t.grade }))}
              onChange={(e) => {
                setGrd(e.value);
                console.log(grd);
              }}
              defaultValue={{ value: 1, label: 'All' }}
            />
          </MDBCol>

          <MDBCol md='6' className='mb-3'>
            <label className='text-info'>By Level</label>
            <Select
              options={level.map((t) => ({ value: t._id, label: t.level }))}
              onChange={(e) => {
                setLev(e.value);
              }}
              defaultValue={{ value: 1, label: 'All' }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='6' className='mb-3'>
            <label className='text-info'>By Situation</label>
            <Select
              options={situation.map((t) => ({
                value: t._id,
                label: t.situation,
              }))}
              onChange={(e) => {
                setSit(e.value);
              }}
              defaultValue={{ value: 1, label: 'All' }}
            />
          </MDBCol>
          <MDBCol md='6' className='mb-3'>
            <label className='text-info'>By Speciality</label>
            <Select
              options={speciality.map((t) => ({
                value: t._id,
                label: t.speciality,
              }))}
              onChange={(e) => {
                setSpec(e.value);
              }}
              defaultValue={{ value: 1, label: 'All' }}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn color='primary' type='submit'>
          filter
        </MDBBtn>
        <MDBBtn color='secondary' onClick={reset}>
          reset
        </MDBBtn>
      </form>
      <div>
        <MDBRow className='mx-md-n3'>
          <MDBCol size='4' className='py-3 px-md-5 text-primary'>
            Total : {profs.length > 0 ? profs.length : teachers.length}
          </MDBCol>
          <MDBCol size='4' className='py-3 px-md-5 text-danger'>
            Enseignants(m) :
            {profs.length > 0
              ? profs.filter((el) => el.sexe === 'M').length
              : teachers.filter((el) => el.sexe === 'M').length}
          </MDBCol>
          <MDBCol size='4' className='py-3 px-md-5 text-success'>
            Enseignantes(f):
            {profs.length > 0
              ? profs.filter((el) => el.sexe === 'F').length
              : teachers.filter((el) => el.sexe === 'F').length}
          </MDBCol>
        </MDBRow>

        <MDBDataTable striped bordered small data={data} />
      </div>
    </div>
  );
};

export default Filter;
