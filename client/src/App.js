import React, { useEffect } from 'react'
import  Form  from './components/Form/Form';
import  Posts  from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'

const App = () => {
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getPosts());
}, [dispatch]);

  return (
    <main className='bg-gray-900' >
      <div className='flex justify-center px-4'>
        <h1 className='text-[50px] font-montserrat text-blue-500'>Memoria</h1>
      </div>
      <div className='flex justify-around py-4 max-sm:flex-col-reverse'>
        <Posts/>
        <Form/>
      </div>
    </main>
  )
}

export default App