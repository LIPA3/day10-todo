import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import api from "../api/mockApi";


function TodoItem(props) {
    const { state, dispatch } = useContext(TodoContext);

    function makeAsDone() {
        updateStatus()
        .then((updatedTodo) => {
            dispatch({
                type: 'TOGGLE_TODO',
                payload: { updatedTodo }
            });
            api.get("/todos")
            .then((response) => response.data)
            .then(todos => {
                dispatch({type: "LOAD_TODOS", payload: todos});
            });
        });
    }
    
    function updateStatus() {
        return api.put(`/todos/${props.todo.id}`, {
            ...props.todo,
            done: !props.todo.done
        }).then((response) => response.data);
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