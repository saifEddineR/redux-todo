import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_DONE, FILTER_UNDONE, FILTER_ALL } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    all: true,
    done: false,
    undone: false,
  });
  const handleFilter = (event) => {
    let id = event.target.id;
    let checked = event.target.checked;
    setFilter({ ...filter, [id]: checked });
    dispatch(FILTER_ALL(id));
    setFilter({ all: true, done: false, undone: false });
  };

  return (
    <div>
      <form className='filter-input'>
        <input type='radio' id='all' name='filter' onChange={handleFilter} />
        <label htmlFor='all'>all</label>
        <input type='radio' id='done' name='filter' onChange={handleFilter} />
        <label htmlFor='done'>done</label>
        <input type='radio' id='undone' name='filter' onChange={handleFilter} />
        <label htmlFor='undone'>undone</label>
      </form>
    </div>
  );
};

export default Filter;
