import TodoItem from './TodoItem';
import User from './User'
import Form from './Form'
import css from './App.module.css'
import { useSelector } from 'react-redux';


function App() {
  const todos = useSelector((state)=>state.todo.todos)


  return (
    <div className={css.App}>
      <div className='container mx-auto px-4'>
              <header className='flex content-center gap-20 '>
                  <div className='w-1/3'>
                      <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
                      <User />
                  </div>
                  <div className='w-1/3'>
                      <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
                      <Form />        
                      
                      {todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
                  </div>
              </header>
      </div>
    </div>
  );



};

export default App;