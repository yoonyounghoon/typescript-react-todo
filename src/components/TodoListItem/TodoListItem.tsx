import React from 'react';
import { Todo } from '../TodoList/TodoList';
import './TodoListItem.css';

type TodoListItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoListItem({ todo, onToggle, onRemove }: TodoListItemProps) {
  return (
    <div className="Todo-item">
      <div className={todo.done ? 'active' : 'list'}>
        <input className="checkbox" type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <div className="text" key={todo.id} onDoubleClick={() => onRemove(todo.id)}>
          {todo.text}
        </div>
      </div>
      <button className="delete" onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </div>
  );
}

export default TodoListItem;
