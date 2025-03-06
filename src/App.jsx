import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { ToDoProvider } from "./context/ToDoContext"

function App() {
  

  return (
    <ToDoProvider>
      <div>
        <h1>To Do List App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </ToDoProvider>
    
  )
}

export default App
