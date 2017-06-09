import React from 'react'

export const Todo = ({toggle, completed, text}) => (
    <li onClick={toggle} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
);
