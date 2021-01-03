import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import Filter from './Components/Filter';

function App() {
  // const todo = useSelector((state) => state.todoReducer);
  // const dispatch = useDispatch();

  return (
    <div className='App-header'>
      <h3>JUST DO IT</h3>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
