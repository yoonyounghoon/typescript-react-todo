import React, { useState } from 'react';
import { useCallback } from 'react';
import './TodoInsert.css';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [text, setText] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();

      onInsert(text);
      setText('');
    },
    [onInsert, text],
  );

  return (
    <div>
      <form className="Todo-form" onSubmit={onSubmit}>
        <input className="form-input" type="text" placeholder="할 일을 입력하세요" value={text} onChange={onChange} />
      </form>
    </div>
  );
}

export default TodoInsert;
