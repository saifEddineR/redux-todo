import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const todo = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className='App-header'>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
    </div>
  );
}

export default App;
