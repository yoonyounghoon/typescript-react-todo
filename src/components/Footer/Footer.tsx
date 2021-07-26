import React from 'react'
import { Todo } from '../TodoList/TodoList'

type FooterProps = {
    todos: Todo[],
    handleStatus: (status:string)=>void,
    onRemoveCompleted: ()=> void
}

function Footer({todos, handleStatus, onRemoveCompleted}:FooterProps) {
    return (
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
    )
}

export default Footer
