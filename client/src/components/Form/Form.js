import React from 'react';

const Form = () => {
  return (
    <section className='max-w-[1440px] md:mx-[80px] '>
    <div className='flex justify-end max-sm:justify-center '>
      <div className="min-h-screen flex flex-col justify-center ">
        <div className="relative py-2 lg:w-[500px] sm:max-w-xl sm:mx-auto md:mb-[100px] lg:mb-30 max-sm:mb-[200px]">
          <div className="relative  md:p-5 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-10 max-sm:rounded-md bg-opacity-60 border border-gray-700" style={{ backdropFilter: "blur(20px)" }}>
            <div className='mb-4 md:mb-10 lg:mb-4'>
              <p className='text-center text-white text-lg lg:text-2xl'>Create Memory</p>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-3 text-sm sm:text-base md:text-lg space-y-4 text-white">
                  <form>
                    <div className="grid gap-4 sm:gap-6 mb-8">
                      <div>
                        <label htmlFor="creator" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Creator name</label>
                        <input
                          type="text"
                          id="creator"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Danish"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="title" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                          type="text"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Best day ever"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="file_input" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Upload file</label>
                        <input
                          type="file"
                          className="text-sm text-grey-500
                          file:mr-5 file:py-2 file:px-6
                          file:rounded-full file:border-0
                          file:text-sm file:font-medium
                          file:bg-blue-50 file:text-blue-700
                          hover:file:cursor-pointer hover:file:bg-blue-50
                          hover:file:text-blue-700"
                        />
                      </div>
                    </div>

                    <div className='flex justify-evenly gap-5' >
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base p-2 text-center dark:bg-blue-600 dark-hover:bg-blue-700 dark-focus-ring-blue-800 "
                      >
                        Submit
                      </button>
  
                    <button
                      type="reset"
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 w-full focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base p-2 text-center dark:bg-red-600 dark-hover:bg-red-700 dark-focus-ring-red-800 "
                    >
                      Clear
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Form;