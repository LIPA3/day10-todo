import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import api from "../api/mockApi";
import { useTodoService } from "../useTodoService";
import { EditOutlined } from '@ant-design/icons';
import TodoModel from "./TodoModel";
import { Button, List } from "antd";
import { useState } from "react";
function TodoItem(props) {
    const { state, dispatch } = useContext(TodoContext);
    const { updateStatus, onDelete } = useTodoService();
const [isModalOpen, setIsModalOpen] = useState(false);
    
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
    function handleEdit() {
        setIsModalOpen(true);
    }
    
    function handleCloseModal() {
        setIsModalOpen(false);
    }
    
    const navigate = useNavigate();
    return <div className={"todo-item"}>
        <List size="large"
            bordered
            dataSource={[props.todo.text]}
            renderItem={item => <List.Item>{item}</List.Item>}
            className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}>
        </List>
            <div className="todo-actions">
            {props.showDetailButton !== false && (
                <Button onClick={() => navigate(`/todos/${props.todo.id}`)}>detail</Button>
            )}
            <Button icon={<EditOutlined />} onClick={handleEdit}>edit</Button>
            <Button type="primary" danger className="to-delete" onClick={() => deleteTodo(props.todo.id)}>X</Button>
        </div>
        
        <TodoModel 
            todo={props.todo} 
            isOpen={isModalOpen} 
            onSave={handleCloseModal} 
            onCancel={handleCloseModal} 
        />
    </div>;


}
export default TodoItem