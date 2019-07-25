import React, { useState } from 'react'
import '../App.css'

export default function Form() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([
        { id: 1, text: "Buy Milk" },
        { id: 2, text: "Buy Cheese" }
    ])

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
            <div style={{ textAlign: 'center',backgroundColor:'black',width:'100vw',height:'100vh',overflow:'hidden' }}>
                <h1 style={{ fontSize: '3em',color:'#3e696e' }} >Simple Todo</h1>
                <form onSubmit={handleNewTodo}>
                    <input placeholder="Add a todo..."
                        onChange={handleToDoChange}
                    />    
                    <ul className="">
                        {todos.map((todo) => (
                            <li className="badge"
                                style={{ fontSize: '2em',listStyleType:'none',display:'text',color:'#3e696e' }}
                                key={todo.id}>
                                {todo.text}
                                <a
                                style={{float:'right',textDecoration:'none',textColor:'#3e696e'}} 
                                href="# " onClick={() => removeTodo(todo.id)}>x</a >
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





