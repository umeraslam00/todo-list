import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'

const TodoList = () => {

    const { todos, toggleComplete, removeToDo } = useContext(ToDoContext)


    return (
        <ul>
            {todos.map(
                todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
                      {todo.task}
                      <button onClick={() => removeToDo(todo.id)}>❌</button>
                    </li>
                )
            )}
        </ul>
    )
}

export default TodoList