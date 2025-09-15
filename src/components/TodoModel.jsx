import { Modal, Input } from "antd";
import { useState, useContext} from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoModel({ todo, isOpen, onSave, onCancel }) {
    const [editText, setEditText] = useState(todo?.text || '');
    const { state, dispatch } = useContext(TodoContext);
    const { TextArea } = Input;
    if (!todo) {
        return null;
    }
    
    function handleSaveEdit() {
        dispatch({
            type: 'EDIT_TODO',
            payload: { id: todo.id, text: editText }
        });
        onSave && onSave();
    }
    
    function handleCancelEdit() {
        setEditText(todo?.text || '');
        onCancel && onCancel();
    }
    return <div>
        <Modal
            title="Edit Todo"
            open={isOpen}
            onOk={handleSaveEdit}
            onCancel={handleCancelEdit}
            okText="Save"
            cancelText="Cancel"
        >
            <TextArea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Enter todo text"
                rows={4}
            />
        </Modal>
    </div>
}