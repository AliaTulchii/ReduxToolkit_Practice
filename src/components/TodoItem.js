import { toggleCompletedTodo, removeTodo } from 'feature/todo/todoSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();

    const toggleTodoHandler = (id) => {
        dispatch(toggleCompletedTodo(id))
    }


    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <div className='flex justify-between items-center my-2'>
            <button
                onClick={() => toggleTodoHandler(todo.id)}
                className='text-sm px-4 py-2 cursor-pointer bg-cyan-300 hover:bg-cyan-400'>
                Complete
            </button>
            <div className={`text-black  ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
               {todo.text}
            </div>
            <button
                onClick={()=>removeTodoHandler(todo.id)}
                className='text-sm px-4 py-2 flex bg-pink-400 hover:bg-pink-500 transition-all text-white cursor-pointer'>
                Delete
            </button>
        </div>
    )
}

export default TodoItem
