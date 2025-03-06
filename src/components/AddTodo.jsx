import React, { useContext, useState } from "react"
import { ToDoContext } from "../context/ToDoContext";

const AddTodo = () => {

    const [task, setTask] = useState('')

    const {addToDo} = useContext(ToDoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(task)
        setTask("");
        console.log("task added.")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add</button>
        </form>
    )

}

export default AddTodo