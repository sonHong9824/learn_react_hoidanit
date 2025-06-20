import { useState } from "react"

const TodoAdd = (props) => {

    const [valueInput, setValueInput] = useState("Son")

    const {AddNewTodo} = props
    // AddNewTodo("son")
    const handleClick = () => {
        AddNewTodo(valueInput)
        setValueInput('')
    }

    const handleChange = (name) => {
        setValueInput(name)
    }

    return(
        <div className='todo-add'>
            <input 
                type="text"
                onChange={(event) => {handleChange(event.target.value)}}
                value={valueInput}
                />

            <button
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
            <div>My input = {valueInput}</div>
        </div>
    )
}
export default TodoAdd