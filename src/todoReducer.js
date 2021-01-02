import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from 'redux';

let InitState = [
  { id: uuidv4(), desc: 'hey there', isDone: false },
  { id: uuidv4(), desc: 'task 2', isDone: false },
];

function todoReducer(state = InitState, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      if (payload.desc.length > 0) {
        return [...state, { id: payload.id, desc: payload.desc }];
      }
      return state;
    case 'BTN_REMOVE':
      return state.filter((el) => el.id !== payload);
    case 'BTN_DONE':
      return state.map((task) =>
        task.id === payload ? { ...task, isDone: !task.isDone } : task
      );
    case 'BTN_CHANGE':
      return state.map((task) =>
        task.id === payload.id
          ? { ...task, desc: payload.input }
          : task
      );
    default:
      return state;
  }
}

export default combineReducers({ todoReducer });
