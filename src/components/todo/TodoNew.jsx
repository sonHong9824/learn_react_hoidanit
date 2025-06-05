
const TodoAdd = (props) => {

    const {AddNewTodo} = props
    // AddNewTodo("son")

    return(
        <div className='todo-add'>
            <input type="text"/>
            <button>Add</button>
        </div>
    )
}
export default TodoAdd