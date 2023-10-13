import React, { useState, useEffect } from 'react'
import NavLink from './components/NavLink/NavLink'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Footer from './components/Footer/Footer';
import Signup from './components/Authentication/Signup.js';
import Login from './components/Authentication/Login.js';
import { Routes,Route } from 'react-router-dom';

const App = () => {
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();


useEffect(() =>{
  dispatch(getPosts());
}, [currentId, dispatch]);

  return (
    <main className='bg-gray-900' >
      <NavLink />
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          {/* <div className='flex justify-around py-[40px] max-sm:flex-col-reverse'>
            <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div> */}
      </Routes>
      <Footer/>
    </main>
  )
}

export default App