import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const handleFilter = (todo, filter) => {
  switch (filter) {
    case 'done':
      return todo.filter((el) => el.isDone);
    case 'undone':
      return todo.filter((el) => !el.isDone);
    default:
      return todo.filter((el) => el);
  }
};

const TodoList = () => {
  const todo = useSelector((state) => state.todoReducer.todo);
  const filter = useSelector((state) => state.todoReducer.filter);
  let newTasks = handleFilter(todo, filter);
  console.log('todo', todo);
  return (
    <div>
      {newTasks.map((todo) => {
        return <Task key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoList;
