import React, { useState, useEffect } from 'react'
import  Form  from './components/Form/Form';
import  Posts  from './components/Posts/Posts';
import NavLink from './components/NavLink/NavLink'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Landing from './pages/Landing';

const App = () => {
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getPosts());
}, [currentId, dispatch]);

  return (
    <main className='bg-gray-900' >
      {/* <NavLink/> */}
      <Landing />
      {/* <div className='flex justify-around py-[40px] max-sm:flex-col-reverse'>
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div> */}
    </main>
  )
}

export default App