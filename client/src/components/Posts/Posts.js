import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  
  return (
    <>
    <section className='grid grid-cols-3 w-[100%] gap-[30px] max-w-[1440px] md:mx-[50px] max-sm:mb-[100px]'>
    {posts.map((post) => (
      <div className='max-sm:justify-center'>
        <div key={post._id}>
          <Post post={post} setCurrentId={setCurrentId}/>
        </div>
      </div>
       ))}
    </section>
    </>
  )
}

export default Posts