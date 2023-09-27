import React from 'react'
import Post from './Post/Post';

const Posts = () => {
  return (
    <section className='max-w-[1440px] md:mx-[80px] max-sm:mb-[100px]'>
      <div className='grid grid-cols-2 max-sm:justify-center'>
        <div>
          <Post/>
        </div>
      </div>
    </section>
  )
}

export default Posts