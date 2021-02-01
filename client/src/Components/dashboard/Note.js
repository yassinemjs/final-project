import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../../actions/note';
import { MDBDataTable, MDBAlert } from 'mdbreact';
import Header from '../layout/Header';

const Note = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  const loading = useSelector((state) => state.note.loading);

  let note = notes.map((note) => ({
    ...note,
    id_unique: note.enseignant.Id_unique,
    name: note.enseignant.name,
    lastName: note.enseignant.lastName,
    date: note.date.slice(0, 10),
    inspector: note.inspector.inspector,
  }));
  console.log(note);

  const data = {
    columns: [
      {
        label: 'ID unique',
        field: 'id_unique',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Name',
        field: 'lastName',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'inspecteur',
        field: 'inspector',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'note',
        field: 'note',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Nature',
        field: 'Nature',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'date',
        field: 'date',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: note,
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  if (loading || !notes) {
    return <MDBAlert color='success'>....Loading</MDBAlert>;
  }
  return (
    <div>
      <Header title='Teachers Inspection' />
      <MDBDataTable striped bordered small data={data} />
    </div>
  );
};

export default Note;
