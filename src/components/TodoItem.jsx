import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import api from "../api/mockApi";
import { useTodoService } from "../useTodoService";
import { List } from "antd";
import { Button } from 'antd';
function TodoItem(props) {
    const { state, dispatch } = useContext(TodoContext);
    const { updateStatus, onDelete } = useTodoService();
    function makeAsDone() {
        updateStatus(props.todo)
            .then((updatedTodo) => {
                dispatch({
                    type: 'TOGGLE_TODO',
                    payload: { updatedTodo }
                });
                api.get("/todos")
                    .then((response) => response.data)
                    .then(todos => {
                        dispatch({ type: "LOAD_TODOS", payload: todos });
                    });
            });
    }

    function deleteTodo(id) {
        onDelete(id)
            .then(() => {
                dispatch({
                    type: 'DELETE_TODO',
                    payload: { id }
                });
            });
    }
    const navigate = useNavigate();
    return <div className={"todo-item"}>
        <List size="large"
            bordered
            dataSource={[props.todo.text]}
            renderItem={item => <List.Item>{item}</List.Item>}
            className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}>
            {/* {props.todo.text} */}
        </List>
            <div className="todo-actions">
            {props.showDetailButton !== false && (
                <button onClick={() => navigate(`/todos/${props.todo.id}`)}>detail</button>
            )}
            {
                <Button type="primary" danger className="to-delete" onClick={() => deleteTodo(props.todo.id)}>X</Button>
            }
        </div>
    </div>;


}
export default TodoItem