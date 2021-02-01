import React, { Fragment, useState } from 'react';
import EnsCard from './EnsCard';
import usePagination from './usePagination';

const EnsList = ({ data, itemsPerPage, startFrom, searchByData }) => {
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState(
    searchByData && searchByData.length > 0 ? searchByData[0].value : ''
  );
  const [searchFor, setSearchFor] = useState('');
  const {
    slicedData,
    pagination,
    prevPage,
    nextPage,
    changePage,
    setFilteredData,
    setSearching,
  } = usePagination({ itemsPerPage, data, startFrom });

  const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      setSearching(true);
      const copiedData = [...data];
      const filtered = copiedData.filter((teacher) => {
        let searchKey = 'name';
        if (searchByData && searchByData.length > 0) {
          searchKey = searchBy;
        }
        return teacher[searchKey]
          .toLowerCase()
          .includes(search.trim().toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
    setSearchFor(search);
  };

  return (
    <div className='wrapper'>
      <form
        onSubmit={submitHandler}
        className='mt-3 mb-3 is-flex'
        style={{ justifyContent: 'center' }}
      >
        {searchByData && searchByData.length > 0 && (
          <div className='select mr-2'>
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              {searchByData.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className='field mr-2'>
          <div className='control'>
            <input
              type='text'
              className='input'
              placeholder='Search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' className='button is-link'>
          Search
        </button>
      </form>
      {searchFor && (
        <h2 className='mb-6 has-text-centered is-size-2'>
          Search results for: "{searchFor}"
        </h2>
      )}
      {slicedData.length > 0 ? (
        <Fragment>
          {slicedData.map((teacher) => (
            <EnsCard key={teacher._id} prof={teacher} />
          ))}

          <nav className='pagination'>
            <a href='/#' className='pagination-previous' onClick={prevPage}>
              Previous
            </a>
            <a href='/#' className='pagination-next' onClick={nextPage}>
              Next
            </a>
            <ul className='pagination-list'>
              {pagination.map((page) => {
                if (!page.ellipsis) {
                  return (
                    <li key={page.id}>
                      <a
                        href='/#'
                        className={
                          page.current
                            ? 'pagination-link is-current'
                            : 'pagination-link'
                        }
                        onClick={(e) => changePage(page.id, e)}
                      >
                        {page.id}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={page.id}>
                      <span className='pagination-ellipsis'>&hellip;</span>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
        </Fragment>
      ) : (
        <div className='message is-link'>
          <div className='message-body has-text-centered'>No results</div>
        </div>
      )}
    </div>
  );
};

export default EnsList;
