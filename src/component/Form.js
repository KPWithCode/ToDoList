import React, { useState } from 'react'


export default function Form() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])

    function handleToDoChange(e) {
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    function handleNewTodo(e) {
        e.preventDefault()
        if (newTodo === '') return
        setTodos([...todos, { id: Date.now(), text: newTodo }])
        e.target.reset()
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <div style={{height:'100vh',width:'100vw', backgroundColor:'#3e696e',textAlign:'center',margin:'0'}}>
            <h1 style={{fontSize:'3em'}} >Simple Todo</h1>
            <form onSubmit={handleNewTodo}>
                <input placeholder="Add a todo..."
                    onChange={handleToDoChange}
                />
                <ul>
                    {todos.map((todo) => (
                        <li style={{  fontSize:'2em',color:''}}
                        key={todo.id}>
                            {todo.text}
                            <a href="# " onClick={() => removeTodo(todo.id)}>X</a >
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}






// const useInputValue = (initialValue) => {
//     const [value, setValue] = useState('')


//     return {
//     value,
//     onChange: e => setValue(e.target.value)
//     }
// }
// export default () => {
//     const text = useInputValue()
//     return <div>
//         <input {...text} />
//     </div>


// }





