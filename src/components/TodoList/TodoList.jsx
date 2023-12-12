import TodoItem from "../TodoItem/TodoItem"


export default function TodoList(props) {
    return (
        <ul className="todo-list">

            {
                props.listaTareas.map(todo => {

                    return (
                        <TodoItem 
                            tarea={todo} 
                            key={todo.id} 
                            setTaskCompleted={props.setTaskCompleted} 
                            deleteTask={props.deleteTask}    
                        />
                    )

                })
            }

        </ul>
    )
}
