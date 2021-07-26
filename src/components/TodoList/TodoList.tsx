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
  // 완료 목록 보기, 미완료 목록보기 , 전체 보기
  // done을 기준으로 체킹
  const [status, setStatus] = useState('All');

  const handleStatus = (status: string) => {
    setStatus(status);
  };

  return (
    <div className="TodoList">
      <div>
        {status === 'all' &&
          todos.map((todo) => <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />)}
        {status === 'active' &&
          todos.map(
            (todo) => !todo.done && <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />,
          )}
        {status === 'completed' &&
          todos.map(
            (todo) => todo.done && <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />,
          )}
      </div>
      {todos.length > 0 && (
        <div className="footer">
          <p className="footer-left">{todos.filter((todo) => !todo.done).length} item left</p>
          <div className="footer-right">
            <button className="footer-btn all" onClick={() => handleStatus('all')}>
              All
            </button>
            <button className="footer-btn active" onClick={() => handleStatus('active')}>
              Active
            </button>
            <button className="footer-btn completed" onClick={() => handleStatus('completed')}>
              Completed
            </button>
          </div>
          <button onClick={onRemoveCompleted}>Clear completed</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
