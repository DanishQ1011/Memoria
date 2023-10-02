import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  
  return (
    <>
    <section className='grid grid-cols-3 w-[100%] gap-[30px] max-lg:grid-cols-1 max-sm:p-4 max-sm:grid-cols-1 max-sm:max-w-[1440px] md:mx-[50px]'>
    {posts.map((post) => (
      <div className='flex max-sm:justify-center'>
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