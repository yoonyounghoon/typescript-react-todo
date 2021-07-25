import React, { useState } from 'react';
import { useRef } from 'react';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '넷플릭스 보기',
      done: true,
    },
    {
      id: 2,
      text: '하루종일 누워있기',
      done: true,
    },
    {
      id: 3,
      text: '하루 3끼 배달시켜먹기',
      done: false,
    },
  ]);
  const id = useRef(4);

  const onInsert = (text: string): void => {
    const todo = {
      id: id.current,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
    id.current++;
  };

  const onToggle = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
