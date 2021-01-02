import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BTN_REMOVE, BTN_DONE, BTN_CHANGE } from '../redux/actions';

const Task = ({ id, desc, isDone }) => {
  const [editTask, setEditTask] = useState(false);
  const [changeInput, setChangeInput] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    event.preventDefault();
    console.log('input', changeInput);
    dispatch(BTN_CHANGE(id, changeInput));
    setEditTask(false);
    setChangeInput('');
  };

  return (
    <div className='todo-task'>
      <div>
        <p> {desc} </p>
        {/* ------------ edit task input + button --------------- */}
        {editTask ? (
          <span className='edit-task'>
            <input
              type='text'
              value={changeInput}
              onChange={(e) => setChangeInput(e.target.value)}
            />
            <Button
              variant='dark'
              type='submit'
              onClick={handleChangeInput}
            >
              change
            </Button>
          </span>
        ) : (
          <p
            className='edit-task-click'
            onClick={() => setEditTask(true)}
          >
            Edit Task
          </p>
        )}
      </div>
      {/* ------------ done / remove buttons --------------- */}
      <form>
        {isDone ? (
          <Button
            variant='success'
            onClick={() => dispatch(BTN_DONE(id))}
          >
            Undone
          </Button>
        ) : (
          <Button
            variant='success'
            onClick={() => dispatch(BTN_DONE(id))}
          >
            done
          </Button>
        )}
        <Button
          variant='danger'
          onClick={() => dispatch(BTN_REMOVE(id))}
        >
          remove
        </Button>
      </form>
    </div>
  );
};

export default Task;
