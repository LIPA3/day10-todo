import api from "./api/mockApi";
export function useTodoService() {
    function updateStatus(todo) {
        return api.put(`/todos/${todo.id}`, {
            ...todo,
            done: !todo.done
        }).then((response) => response.data);
    }
    function creatTodo(text) {
        return api.post("/todos", { text, done: false })
            .then((response) => response.data);
    }
    function onDelete(id) {
        return api.delete(`/todos/${id}`);
    }
    function loadTodos() {
        return api.get("/todos")
            .then((response) => response.data);
    }
    return { updateStatus, creatTodo, onDelete, loadTodos };
}
