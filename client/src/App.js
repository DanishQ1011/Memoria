import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import  Form  from './components/Form/Form';
import  Posts  from './components/Posts/Posts';



const App = () => {

  return (
    <main className='max-container bg-gray-900' >
      <div className='flex justify-center py-4 px-4'>
        <h1 className='text-[50px] font-montserrat text-blue-500'>Memoria</h1>
      </div>
      <Form/>
    </main>
  )
}

export default App