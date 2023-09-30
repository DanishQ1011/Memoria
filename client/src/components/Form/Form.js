import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';



const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const clear = () => {
    setCurrentId(0); 
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <form className='max-w-[1440px] md:mx-[50px]' onSubmit={handleSubmit}>
      <div className='flex max-sm:justify-center '>
        <div className="flex flex-col sm:justify-center ">
          <div className="relative lg:w-[410px] sm:max-w-xl sm:mx-auto md:mb-[100px] lg:mb-30 max-sm:mb-[50px]">
            <div className="relative md:p-5 bg-gray-800 shadow-lg sm:rounded-2xl max-sm:p-10 max-sm:rounded-md bg-opacity-60 border border-gray-800" style={{ backdropFilter: "blur(20px)" }}>
              <div className='mb-4 md:mb-10 lg:mb-4'>
                <p className='text-center text-blue-300 text-lg lg:text-2xl'>{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</p>
              </div>
              <div className="max-w-lg mx-auto">
                <div className="divide-y divide-gray-200">
                  <div className="py-3 text-sm sm:text-base md:text-lg space-y-4 text-white">
                    <div className="grid gap-4 sm:gap-6 mb-8">
                      <div>
                        <label htmlFor="creator" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Creator name</label>
                        <input
                          type="text"
                          name="creator"
                          label="creator"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Danish"
                          required
                          value={postData.creator}
                          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="title" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                          type="text"
                          label="title"
                          name="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Best day ever"
                          required
                          value={postData.title}
                          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea
                          name="message"
                          label="message"
                          rows="4"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                          value={postData.message}
                          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                        ></textarea>
                      </div>
                      <div>
                      <div className='p-3 border border-dashed border-gray-300 rounded-lg'>
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                      />
                    </div>
                      </div>
                    </div>

                    <div className='flex justify-evenly gap-5' >
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base p-2 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-bg-blue-800 "
                      >
                        Submit
                      </button>
                      <button
                        onClick={clear}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 w-full focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base p-2 text-center dark-bg-red-600 dark-hover-bg-red-700 dark-focus-ring-bg-red-800 "
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
