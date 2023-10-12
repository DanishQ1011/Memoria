import React, { useState, useEffect } from 'react'
import  Form  from './components/Form/Form';
import  Posts  from './components/Posts/Posts';
import NavLink from './components/NavLink/NavLink'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Authentication from './components/Authentication/Authentication';
import Footer from './components/Footer/Footer';

const App = () => {
const [showLoginForm, setShowLoginForm] = useState(true);
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();

const toggleLoginForm = () => {
  setShowLoginForm(!showLoginForm);
};



useEffect(() =>{
  dispatch(getPosts());
}, [currentId, dispatch]);

  return (
    <main className='bg-gray-900' >
      <NavLink showLoginForm={showLoginForm} toggleLoginForm={toggleLoginForm} />
      <Authentication showLoginForm={showLoginForm} toggleLoginForm={toggleLoginForm} />
      
      {/* <div className='flex justify-around py-[40px] max-sm:flex-col-reverse'>
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div> */}
      <Footer/>
    </main>
  )
}

export default App