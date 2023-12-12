import { useRef } from "react";

export default function TodoForm(props) {
    // const taskRef = useRef()
    function handleTaskForm(evt) {
        evt.preventDefault();

        let task = evt.target.elements.task;
        // const task = taskRef.current.value;
        props.addTodoTask(task.value)
        task.value = '';
    }

    return (
        <>
            <form onSubmit={handleTaskForm}>

                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Tarea</label>
                    <input  name='task'
                            // ref={taskRef}
                            type="text"
                            className="form-control" 
                            id="task" 
                            placeholder="Tarea a realizar" />
                </div>
                <div className="mb-3">
                    <button type='submit' className='btn btn-primary'>Agregar</button>
                </div>

            </form>
        </>
    )
}
