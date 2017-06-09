import React from 'react'
import {Todo} from './todo'

export const TodoList = ({todos, onTodoClick, addTodo}) => (
    <div>
        <ul>
            {todos.map(todo =>
                <Todo key={todo.id} {...todo} toggle={() => onTodoClick(todo.id)}/>
            )}
        </ul>
        <button onClick={() => addTodo(todos.length, 'new todo')}>add todo</button>
    </div>
);
