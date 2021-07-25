import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
