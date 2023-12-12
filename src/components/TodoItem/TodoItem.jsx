import Swal from 'sweetalert2'
export default function TodoItem({ tarea, setTaskCompleted, deleteTask  }) {

    function deleteTaskConfirm() {
        Swal.fire({
            title: 'Eliminar tarea?',
            text: `Realmente desea eliminar la tarea ${tarea.task}`,
            icon: 'warning',
            confirmButtonText: 'Confirmar',
            showCancelButton: true,
        }).then(result => {
            if(result.isConfirmed) {
                deleteTask(tarea.id)
            }
        })
    }

    return (
        <li className="todo-item">
            { tarea.completed ? 
                ( <del className="text-gray">{tarea.task}</del> ) 
                : 
                ( <>{tarea.task}</> ) 
            }

            <div className="todo-actions">
                <input  type="checkbox" 
                        onChange={() => setTaskCompleted(tarea.id)}
                />
                <button className="btn-danger" 
                        onClick={() => deleteTaskConfirm() }>
                            X
                </button>
            </div>

        </li>
    )
}
