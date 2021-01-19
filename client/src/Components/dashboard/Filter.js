import React, { Fragment, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { getAllEns } from '../../actions/prof';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

const Filter = ({ getAllEns, prof: { teachers } }) => {
  const [grade, setGrade] = useState([]);
  const [level, setLevel] = useState([]);
  const [situation, setSituation] = useState([]);
  const [speciality, setSpeciality] = useState([]);

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
      {
        name: 'Show details',
        button:
          "<button class='btn btn-primary table-button'>See more</button>",
      },
    ],
    rows: teachers,
  };

  useEffect(() => {
    getAllEns();
  }, [getAllEns]);

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

  return (
    <div className='filter'>
      <Select options={grade.map((t) => ({ value: t._id, label: t.grade }))} />
      <Select options={level.map((t) => ({ value: t._id, label: t.level }))} />
      <Select
        options={situation.map((t) => ({ value: t._id, label: t.situation }))}
      />
      <Select
        options={speciality.map((t) => ({ value: t._id, label: t.speciality }))}
      />
      <div className='datalist'>
        <MDBDataTable striped bordered small data={data} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  prof: state.prof,
});

export default connect(mapStateToProps, { getAllEns })(Filter);
