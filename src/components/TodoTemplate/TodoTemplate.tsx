import React from 'react';
import './TodoTemplate.css';

type TodoTemplateProps = {
  children: React.ReactNode;
};

function TodoTemplate({ children }: TodoTemplateProps) {
  return (
    <div className="wrapper">
      <div className="TodoTemplate">
        <div className="head"></div>
        <h1 className="Todo-title">📝 TODO LIST</h1>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default TodoTemplate;
