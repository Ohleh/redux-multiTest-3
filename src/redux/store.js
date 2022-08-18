const addTodoOperation = () => {
const get = fetch(/link)

return (dispatch) => {
dispatch(addTodo(get))
}

}

або

const addTodoOperation = () => {
return dispatch =>  {
const get = fetch(/link);
dispatch(addTodo(get))

}
}

або коротко:

const addTodoOperation = (return) => {
const get = fetch(/link)
dispatch(addTodo(get))
}