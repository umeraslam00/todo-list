import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";


//Create Context
export const ToDoContext = createContext();

// Provider Component
export const ToDoProvider = ({children}) => {

    const [todos, setTodos] = useState([]);


    // Load todos from local storage when the app starts.
    useEffect(() => {
        const savedToDo = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedToDo);
        console.log("todos loaded successfully.")

    }, [])

    // Save todos to local storage when they change.
    useEffect(() => {
        //example: localStorage.setItem("username", "Alice");

        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
            console.log("todos saved successfully.")
        }
    }, [todos]);

    //Add a new todo
    const addToDo = (task) => {
        const newToDo = {
            id: Date.now(),
            task: task,
            completed: false
        }

        setTodos([...todos, newToDo])
    }
    
    //Toggle Complete
    const toggleComplete = (id) => {
        setTodos(todos.map(
            todo  => todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }

    //Remove a To Do
    const removeToDo = (id) => {
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }

    return(
        <ToDoContext.Provider value={{todos, addToDo, toggleComplete, removeToDo}}>
          {children}
        </ToDoContext.Provider>
    )

}