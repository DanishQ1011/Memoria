import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import  Form  from './components/Form/Form';
import  Posts  from './components/Posts/Posts';



const App = () => {

  return (
    <main className='max-container bg-gray-900' >
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