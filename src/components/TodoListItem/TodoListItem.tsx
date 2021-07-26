import React from 'react';
import { useState } from 'react';
import { Todo } from '../TodoList/TodoList';
import './TodoListItem.css';

type TodoListItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoListItem({ todo, onToggle, onRemove }: TodoListItemProps) {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  const handleInvisible = () => {
    setVisible(false);
  };

  return (
    <div className="Todo-item" onMouseOver={handleVisible} onMouseOut={handleInvisible}>
      <div className={todo.done ? 'done list' : 'list'}>
        <input className="checkbox" type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} readOnly />
        <input className={todo.done ? 'done text' : 'text'} key={todo.id} readOnly value={todo.text} />
      </div>
      {visible && (
        <button className="delete" onClick={() => onRemove(todo.id)} onMouseEnter={handleVisible}>
          삭제
        </button>
      )}
    </div>
  );
}

export default TodoListItem;
