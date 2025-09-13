export function todoReducer(state, action) {
    switch (action.type) {
        case "TUGGLE_TODO":
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done,
                    }
                }
                return value;
            })
        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload.id);
        case "ADD_TODO":
            return [...state, action.payload];
        default:
            return state;
    }
}