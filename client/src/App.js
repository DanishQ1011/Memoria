import React, { useState, useEffect } from 'react'
import  Form  from './components/Form/Form';
import  Posts  from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'

const App = () => {
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getPosts());
}, [currentId, dispatch]);

  return (
    <main className='bg-gray-900' >
      <div className='flex justify-center px-4'>
        <h1 className='text-[50px] font-montserrat text-blue-500'>Memoria</h1>
      </div>
      <div className='flex justify-around py-4 max-sm:flex-col-reverse'>
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </main>
  )
}

export default App