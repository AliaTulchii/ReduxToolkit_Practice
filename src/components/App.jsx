import TodoItem from './TodoItem';
import User from './User'
import Form from './Form'
import Posts from './Posts';
import css from './App.module.css'


function App() {
  return (
    <div className={css.App}>
      <div className='container mx-auto px-4'>
              <header className='flex gap-20 '>
                  <div className='w-1/3'>
                      <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
                      <User />
                  </div>
                  <div className='w-1/3'>
                      <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
                      <Form />
                      <TodoItem />
                  </div>
                  <div className='w-1/3'>
                      <h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
                      <Posts />
                  </div>
              </header>
          </div>
    </div>
  );



};

export default App;