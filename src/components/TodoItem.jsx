import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";



function TodoItem(props) {
    const { state, dispatch } = useContext(TodoContext);

    function makeAsDone() {
        dispatch({
            type: 'TUGGLE_TODO',
            payload: { id: props.todo.id }
        });
    }
    const navigate = useNavigate();
    return <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}>
            {props.todo.text}
        </span>
        {props.showDetailButton !== false && (
            <button onClick={() => navigate(`/todos/${props.todo.id}`)}>move to detail</button>
        )}
    </div>;
}
export default TodoItem