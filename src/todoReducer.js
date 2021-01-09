import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from 'redux';

let InitState = { todo: [], filter: '' };

function todoReducer(state = InitState, { type, payload }) {
  switch (type) {
    case 'ADD_TODO': //---------------------------------------------
      if (payload.desc.trim().length > 0) {
        return {
          ...state,
          todo: [
            ...state.todo,
            { id: payload.id, desc: payload.desc, isDone: false },
          ],
        };
      }
      return state;
    case 'BTN_REMOVE': //-------------------------------------------
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== payload),
      };
    case 'BTN_DONE': //----------------------------------------------
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case 'BTN_CHANGE': //--------------------------------------------
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id === payload.id ? { ...task, desc: payload.input } : task
        ),
      };
    case 'FILTER_ALL':
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
}

export default combineReducers({ todoReducer });
