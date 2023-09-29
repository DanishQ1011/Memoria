import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  
  return (
    <div className='grid grid-cols-3 gap-x-[10px] gap-y-[20px] max-sm:grid-cols-1 '>
    <div className="py-[2px] max-sm:p-7 max-sm:py-3">
      <div className="max-w-sm h-[508px] w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-800">
            <img className="rounded-t-lg h-[210px] w-full object-cover object-top" src={post.selectedFile} alt=""/>
            <div className='p-4'>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
              <h6 className="text-white mb-2">{post.creator}</h6>
              <p className="font-normal text-gray-700 dark:text-gray-400 h-[80px] overflow-y-scroll">{post.message}</p>
              <p className='mb-2 text-sm text-gray-500'>{moment(post.createdAt).fromNow()}</p>
              <div className="p-2 mt-4">
          <div className="flex justify-around">
            <button onClick={() => dispatch(likePost(post._id))} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" className="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
            <button onClick={() => dispatch(deletePost(post._id))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6EFF16" className="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Post;