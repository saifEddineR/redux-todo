import React, { useState } from 'react';
import task from '../styles/task.css';
// react icons
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';
// react bootstrap
import { Button } from 'react-bootstrap';
// redux related
import { useDispatch } from 'react-redux';
import { BTN_REMOVE, BTN_DONE, BTN_CHANGE } from '../redux/actions';

const Task = ({ id, desc, isDone }) => {
  const [editTask, setEditTask] = useState(false);
  const [changeInput, setChangeInput] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    event.preventDefault();
    if (changeInput.trim().length > 0) {
      dispatch(BTN_CHANGE(id, changeInput));
    }
    setEditTask(false);
    setChangeInput('');
  };

  return (
    <div className='todo-task'>
      {/* --------------- done button + text --------------- */}
      {isDone ? (
        <span className='btn-check'>
          <span className='btn-done' onClick={() => dispatch(BTN_DONE(id))}>
            <AiFillCheckCircle />
          </span>
          <p className='text-done'> {desc} </p>
        </span>
      ) : (
        <span className='btn-check'>
          <span className='btn-undone' onClick={() => dispatch(BTN_DONE(id))}>
            <AiFillCheckCircle />
          </span>
          <p> {desc} </p>
        </span>
      )}
      {/* ------------ edit task input + button --------------- */}
      <div className='edit-remove'>
        {editTask ? (
          <span className='edit-task'>
            <input
              type='text'
              value={changeInput}
              onChange={(e) => setChangeInput(e.target.value)}
            />
            <span onClick={handleChangeInput}>
              <MdDone />
            </span>
          </span>
        ) : (
          <span className='edit-task-click' onClick={() => setEditTask(true)}>
            <FiEdit />
          </span>
        )}
        {/* ------------remove buttons --------------- */}
        <form>
          <span className='btn-remove' onClick={() => dispatch(BTN_REMOVE(id))}>
            <FaTrash />
          </span>
        </form>
      </div>
    </div>
  );
};

export default Task;
