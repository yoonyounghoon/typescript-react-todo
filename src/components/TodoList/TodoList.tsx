import React, { useState } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onRemoveCompleted: () => void;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

function TodoList({ todos, onToggle, onRemove, onRemoveCompleted }: TodoListProps) {
  return (
    <div className="TodoList">
      <div>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
      {todos.length > 0 && (
        <div className="footer">
          <p className="footer-left">{todos.filter((todo) => !todo.done).length} item left</p>
          <div className="footer-right">
            <button className="footer-btn all">All</button>
            <button className="footer-btn active">Active</button>
            <button className="footer-btn completed">Completed</button>
          </div>
          <button onClick={onRemoveCompleted}>Clear completed</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
