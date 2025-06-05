
const TodoAdd = (props) => {

    const {AddNewTodo} = props
    // AddNewTodo("son")
    const handleClick = () => {
        alert("click me")
    }

    const handleChange = (name) => {
        console.log(">> change", name)
    }

    return(
        <div className='todo-add'>
            <input 
                type="text"
                onChange={(event) => {handleChange(event.target.value)}}/>
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}
export default TodoAdd