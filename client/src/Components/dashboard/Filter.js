import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import {
  getAllEns,
  filterGrade,
  filterLevel,
  filterSituation,
  filterSpeciality,
} from '../../actions/prof';

import { useDispatch, useSelector } from 'react-redux';
import { MDBDataTable, MDBAlert, MDBBtn, MDBRow, MDBCol } from 'mdbreact';

const Filter = () => {
  const [grade, setGrade] = useState([]);
  const [level, setLevel] = useState([]);
  const [situation, setSituation] = useState([]);
  const [speciality, setSpeciality] = useState([]);

  const teachers = useSelector((state) => state.prof.teachers);
  const loading = useSelector((state) => state.prof.loading);
  const dispatch = useDispatch();

  const [grd, setGrd] = useState('');
  const [sit, setSit] = useState('');
  const [spec, setSpec] = useState('');
  const [lev, setLev] = useState('');
  const reset = () => {
    setGrd('');
  };

  useEffect(() => {
    dispatch(getAllEns());
  }, [getAllEns]);

  const data = {
    columns: [
      {
        label: 'Id_unique',
        field: 'Id_unique',
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
    rows: teachers,
  };

  useEffect(async () => {
    const gr = await axios.get('api/grade');
    const sp = await axios.get('api/speciality');
    const le = await axios.get('api/level');
    const si = await axios.get('api/situation');
    setGrade(gr.data);
    setSpeciality(sp.data);
    setSituation(si.data);
    setLevel(le.data);
  }, [getAllEns]);

  if (loading || !teachers) {
    return <MDBAlert color='success'>....Loading</MDBAlert>;
  }

  return (
    <div className='filter'>
      <form
        className='needs-validation'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(filterLevel(lev));
          dispatch(filterGrade(grd));
          dispatch(filterSpeciality(spec));
          dispatch(filterSituation(sit));
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
            />
          </MDBCol>

          <MDBCol md='6' className='mb-3'>
            <label className='text-info'>By Level</label>
            <Select
              options={level.map((t) => ({ value: t._id, label: t.level }))}
              onChange={(e) => {
                setLev(e.value);
              }}
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
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn color='primary' type='submit'>
          submit
        </MDBBtn>
        <MDBBtn color='secondary' onClick={reset}>
          reset
        </MDBBtn>
      </form>
      <div>
        <MDBAlert color='dark'>Total :{teachers.length}</MDBAlert>
      </div>
      <div className='datalist'>
        <MDBDataTable striped bordered small data={data} />
      </div>
    </div>
  );
};

export default Filter;
