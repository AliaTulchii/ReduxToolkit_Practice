import React from 'react'

const TodoItem = () => {
    const completed = false
    return (
        <div className='flex justify-between items-center my-2'>
            <button className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </button>
            <div className={`text-sm ${completed ? 'line-through font-medium text-lime-400' : ''}`}>
                Todo Text
            </div>
            <button className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </button>
        </div>
    )
}

export default TodoItem
