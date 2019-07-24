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
        <div>
            <h1>Simple Todo</h1>
            <form onSubmit={handleNewTodo}>
                <input placeholder="To Do"
                    onChange={handleToDoChange}
                />
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
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





