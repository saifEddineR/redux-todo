import { useSelector } from 'react-redux';

// const todo = useSelector((state) => state.todoReducer);

function filterReducer(state = {}, { type, payload }) {
  switch (type) {
    // case 'FILTER_DONE': //-------------------------------------------
    //   return state.filter((task) => true);
    // case 'FILTER_UNDONE': //-----------------------------------------
    //   return state.filter((task) => true);
    // case 'FILTER_ALL':
    //   return state.filter((task) =>
    //     payload === 'all'
    //       ? task
    //       : payload === 'done'
    //       ? task.isDone
    //       : task.isDone === false
    //   );
    default:
      return state;
  }
}
export default filterReducer;
