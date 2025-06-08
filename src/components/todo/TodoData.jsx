
const TodoData = (props) => {
    // console.log(">> props", props)

    const {todoList} = props

    console.log(">>>", todoList)

    return(
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div key={item.id} style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        padding: "8px", 
                        borderBottom: "1px solid #ccc" 
                    }}>
                        <span>{item.name}</span>
                        <button>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}
export default TodoData