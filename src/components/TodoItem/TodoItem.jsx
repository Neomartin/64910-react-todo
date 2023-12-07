export default function TodoItem(props) {
    return (
        <li className="todo-item">
            {props.tarea.task}

            <div className="todo-actions">
                <input type="checkbox" />
                <button className="btn-danger">X</button>
            </div>

        </li>
    )
}
