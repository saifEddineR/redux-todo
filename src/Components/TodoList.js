import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo = useSelector((state) => state.todoReducer);
  console.log('todo', todo);
  return (
    <div>
      {todo.map((todo) => {
        return <Task key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoList;
