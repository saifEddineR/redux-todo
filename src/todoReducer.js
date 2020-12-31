let InitState = {
  todo: 'work harder',
};

const todoReducer = (state = InitState, { type, payload }) => {
  switch (type) {
    case 'TEST':
      return { ...state, todo: 'done' };
    default:
      return state;
  }
};

export default todoReducer;
