import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  
  return (
    <section className='max-w-[1440px] md:mx-[80px] max-sm:mb-[100px]'>
      <div className='max-sm:justify-center'>
        <div>
          <Post/>
        </div>
      </div>
    </section>
  )
}

export default Posts