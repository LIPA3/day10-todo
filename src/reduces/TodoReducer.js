export function todoReducer(state, action) {
    switch (action.type) {
        case "TUGGLE_TODO":
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload.id);
        case "ADD_TODO":
            return [...state, action.payload];
        case "EDIT_TODO":
            return state.map(item => 
                item.id === action.payload.id 
                    ? { ...item, text: action.payload.text }
                    : item
            );
        case "LOAD_TODOS":
            return action.payload;
        default:
            return state;
    }
}