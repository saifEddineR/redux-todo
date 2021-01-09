import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdAddBox } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { ADD_TODO } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const AddTodo = (props) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(ADD_TODO(input));
    setInput('');
  };

  return (
    <div>
      <form className='add-todo'>
        <input
          type='text'
          placeholder='add a task'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <span onClick={handleSubmit} className='btn-add'>
          <MdAddBox />
        </span>
        <button type='submit' onClick={handleSubmit}></button>
        {/* <button className='btn-add' type='submit' onClick={handleSubmit}>
          <MdAddBox />
        </button> */}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { id: state.id, desc: state.desc };
};

export default connect(mapStateToProps)(AddTodo);
