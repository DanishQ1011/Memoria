import React, { useState, useEffect } from 'react';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import NavLink from './NavLink/NavLink';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
    const { user } = useUserAuth();
    console.log(user);
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getPosts());
      }, [currentId, dispatch]);

    return (
        <>
        <NavLink/>
        <div className='flex justify-around py-[40px] max-sm:flex-col-reverse'>
            <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        </>
        )
    }
          
export default Home;