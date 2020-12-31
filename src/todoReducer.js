let InitState = {
  todo: 'work harder',
};

const todoReducer = (state = InitState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, todo: 'done' };
    default:
      return state;
  }
};

export default todoReducer;
