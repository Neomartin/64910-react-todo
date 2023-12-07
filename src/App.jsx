import './App.css'
import Title from './components/Title/Title'
import TodoList from './components/TodoList/TodoList'

//create a todo list variable
const todoList = [
    { id: 1, task: 'Tarea 1', completed: false },
    { id: 2, task: 'Tarea 2', completed: false },
    { id: 3, task: 'Tarea 3', completed: false },
    { id: 4, task: 'Tarea 4', completed: false },
    { id: 5, task: 'Tarea 5', completed: false },
    { id: 6, task: 'Tarea 6', completed: false },
    { id: 7, task: 'Tarea 7', completed: false },
]

export default function App() {
  return (
    <>
      <Title titulo="Lista de Tareas React" />
      
      <TodoList listaTareas={todoList} />
    </>
  )
}
