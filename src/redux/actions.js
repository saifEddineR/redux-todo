import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uuidv4(),
      desc: todo,
    },
  };
};
export const BTN_REMOVE = (id) => {
  return {
    type: 'BTN_REMOVE',
    payload: id,
  };
};
export const BTN_DONE = (id) => {
  return {
    type: 'BTN_DONE',
    payload: id,
  };
};
export const BTN_CHANGE = (id, input) => {
  return {
    type: 'BTN_CHANGE',
    payload: {
      id: id,
      input: input,
    },
  };
};
export const FILTER_ALL = (id) => {
  return {
    type: 'FILTER_ALL',
    payload: id,
  };
};
