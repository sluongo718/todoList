export const addTask = (task) => {
    return (dispatch) => {
        fetch('http://localhost:3000/tasks', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "content-Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(task => dispatch({type: "ADD_TASK", payload: task}))
    }
}