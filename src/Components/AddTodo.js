import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    console.log('addtodo state', props);
    setInput('');
  };

  return (
    <div>
      <form className='add-todo'>
        <input
          type='text'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button variant='dark' type='submit' onClick={handleSubmit}>
          Add to List
        </Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { id: state.id, desc: state.desc };
};

export default connect(mapStateToProps)(AddTodo);
