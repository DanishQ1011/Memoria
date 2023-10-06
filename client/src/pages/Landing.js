import React from 'react';

const Landing = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2 bg-blue-500">
        <img src="https://yt3.googleusercontent.com/4YH45GYC77GYfrA9QRLhXE7ntV-tpVLG6qxpVbfPjBWEsTviiFhRIOKbVSIVrmYfyuMSLKx1FQ=s900-c-k-c0x00ffffff-no-rj" alt="Your Image" className="h-full w-full object-cover" />
      </div>
      <div className="w-1/2 ">
        <div className='flex justify-center mt-[15%]'>
        <form className='max-w-[1440px] '>
      <div className='flex max-sm:justify-center '>
        <div className="flex flex-col sm:justify-center ">
          <div className="relative lg:w-[410px] sm:max-w-xl sm:mx-auto md:mb-[100px] lg:mb-30 max-sm:mb-[50px]">
            <div className="relative md:p-5 bg-gray-800 shadow-lg sm:rounded-2xl max-sm:p-10 max-sm:rounded-md bg-opacity-60 border border-gray-800" style={{ backdropFilter: "blur(20px)" }}>
              <div className='mb-4 md:mb-10 lg:mb-4'>
                <p className='text-center text-blue-300 text-lg lg:text-2xl'>Something</p>
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
                        ></textarea>
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
        </div>
      </div>
    </div>
  );
};

export default Landing;