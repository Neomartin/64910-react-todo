import './App.css'
import Title from './components/Title/Title'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import { useState } from 'react'
//create a todo list variable
// const TODO_LIST = [
//     { id: 1, task: 'Tarea 1', completed: false },
//     { id: 2, task: 'Tarea 2', completed: false },
//     { id: 3, task: 'Tarea 3', completed: false },
//     { id: 4, task: 'Tarea 4', completed: false },
//     { id: 5, task: 'Tarea 5', completed: false },
//     { id: 6, task: 'Tarea 6', completed: false },
//     { id: 7, task: 'Tarea 7', completed: false },
// ]

export default function App() {

  const [ todoList, setTodoList ] = useState([])

  // #Agregar tarea
  function addTodoTask(tarea) {

    const newTask = {
      id: crypto.randomUUID(),
      completed: false,
      task: tarea
    }
    setTodoList( [ ...todoList, newTask ] )
  }


  //Borrar tarea
  function deleteTask(id) {

    // const arraySinElemento = [ ...todoList ]
    // const indice = arraySinElemento.findIndex(task => task.id === id)
    // arraySinElemento.splice(indice, 1)

    const arraySinElemento = todoList.filter(task => {
      return task.id !== id
    })
    

    setTodoList(arraySinElemento)

  }

  // #Completar tarea
  function setTaskCompleted(id) {

    const task = todoList.find(todo => {
      return id === todo.id;
    })

    task.completed = !task.completed

    setTodoList([ ...todoList ])

  }

  return (
    <>
      <Title titulo="Lista de Tareas React" />
      
      <TodoForm addTodoTask={addTodoTask} />

      <TodoList 
          listaTareas={todoList} 
          setTaskCompleted={setTaskCompleted}
          deleteTask={deleteTask}    
      />
    </>
  )
}
