import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_DONE, FILTER_UNDONE, FILTER_ALL } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    let id = event.target.id;
    dispatch(FILTER_ALL(id));
  };

  return (
    <div>
      <form className='filter-input'>
        <input type='radio' id='all' name='filter' onChange={handleFilter} />
        <label htmlFor='all'>All</label>
        <input type='radio' id='done' name='filter' onChange={handleFilter} />
        <label htmlFor='done'>Done</label>
        <input type='radio' id='undone' name='filter' onChange={handleFilter} />
        <label htmlFor='undone'>Not-done</label>
      </form>
    </div>
  );
};

export default Filter;
