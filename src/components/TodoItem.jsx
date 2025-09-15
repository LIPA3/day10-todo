import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import api from "../api/mockApi";


function TodoItem(props) {
    const { state, dispatch } = useContext(TodoContext);

    function makeAsDone() {
        dispatch({
            type: 'TUGGLE_TODO',
            payload: { id: props.todo.id }
        });
    }
    function deleteTodo(id) {
        api.delete(`/todos/${id}`)
            .then(() => {
                dispatch({
                    type: 'DELETE_TODO',
                    payload: { id }
                });
            });
    }
    const navigate = useNavigate();
        return <div className={"todo-item"}>
            <span className={props.todo.done ? "todo-done" : ""}
                onClick={makeAsDone}>
                {props.todo.text}
            </span>
            <div style={{display: 'flex', gap: '10px'}}>
                {props.showDetailButton !== false && (
                    <button onClick={() => navigate(`/todos/${props.todo.id}`)}>detail</button>
                )}
                {
                    <button className="to-delete" onClick={() => deleteTodo(props.todo.id)}>X</button>
                }
            </div>
        </div>;
}
export default TodoItem