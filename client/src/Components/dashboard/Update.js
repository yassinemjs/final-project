import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEns } from '../../actions/prof';

const Update = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.prof.teachers);
  const loading = useSelector((state) => state.prof.loading);

  useEffect(() => {
    dispatch(getAllEns());
  }, [getAllEns]);

  if (loading || !teachers) {
    return <p>.....loading</p>;
  }
  return (
    <div>
      <table>
        <tr>
          <th>Id Unique</th>
          <th>name</th>
          <th>lastName</th>
          <th>email</th>
          <th>grade</th>
        </tr>
        {teachers &&
          teachers.map((teacher) => (
            <>
              <tr>
                <td>{teacher.id_unique}</td>
                <td>{teacher.name}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.email}</td>
                <td>{!teacher.grade ? '' : teacher.grade.grade}</td>
              </tr>
            </>
          ))}
      </table>
    </div>
  );
};

export default Update;
