import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList, { Todo } from './components/TodoList/TodoList';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

const getStore = () => {
  let store = localStorage.getItem("todos");
  return (store && JSON.parse(store)) || [];
}

function App() {
  const [todos, setTodos] = useState<Todo[] | []>(getStore());
  
  const id = useRef(1);

  const onInsert = (text: string): void => {
    const todo = {
      id: id.current,
      text,
      done: false,
    };
    setTodos([...todos, todo]);
    id.current++;
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onToggle = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onRemoveCompleted = () => {
    setTodos(todos.filter((todo) => todo.done === false));
  };


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])




  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} onRemoveCompleted={onRemoveCompleted} />
    </TodoTemplate>
  );
}

export default App;
