import React, { useState, useEffect } from 'react';
import EnsCard from './EnsCard';

import ReactPaginate from 'react-paginate';
import axios from 'axios';

const EnsList = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get('/api/prof/all');
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((teacher) => (
      <EnsCard key={teacher._id} prof={teacher} />
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className='App'>
      {data}
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default EnsList;
