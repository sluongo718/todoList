export default function taskReducer(state = {tasks: []}, action) {
    switch(action.type) {

        case "ADD_TASK": 
            return {
                ...state, 
                tasks: [...state.tasks, action.payload]
            }

        case "GET_TASK":
            return {
                state, tasks: action.payload
            }

        default: return state
    }
}