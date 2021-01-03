import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from 'redux';
import filterReducer from './redux/filterReducer';
let InitState = [
  { id: uuidv4(), desc: 'hey there', isDone: false },
  { id: uuidv4(), desc: 'task 2', isDone: false },
  { id: uuidv4(), desc: 'bravo team', isDone: true },
];

function todoReducer(state = InitState, { type, payload }) {
  switch (type) {
    case 'ADD_TODO': //---------------------------------------------
      if (payload.desc.trim().length > 0) {
        return [...state, { id: payload.id, desc: payload.desc }];
      }
      return state;
    case 'BTN_REMOVE': //-------------------------------------------
      return state.filter((task) => task.id !== payload);
    case 'BTN_DONE': //----------------------------------------------
      return state.map((task) =>
        task.id === payload ? { ...task, isDone: !task.isDone } : task
      );
    case 'BTN_CHANGE': //--------------------------------------------
      return state.map((task) =>
        task.id === payload.id ? { ...task, desc: payload.input } : task
      );
    case 'FILTER_ALL':
      return state.filter((task) =>
        payload === 'all'
          ? task
          : payload === 'done'
          ? task.isDone
          : task.isDone === false
      );
    default:
      return state;
  }
}

export default combineReducers({ todoReducer, filterReducer });
