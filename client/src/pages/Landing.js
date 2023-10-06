import React, { useState } from 'react';
import landingpage from '../images/landingpage.jpg';


const Landing = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2 bg-blue-500">
        <img src= {landingpage} />
      </div>
      <div className="w-1/2 ">
        <div className='flex justify-center'>
        <form className='max-w-[1440px] '>
      <div className='flex max-sm:justify-center '>
        <div className="flex flex-col sm:justify-center ">
          <div className="relative lg:w-[410px] sm:max-w-xl sm:mx-auto md:mb-[100px] lg:mb-30 max-sm:mb-[50px]">
            <div className="relative md:p-5 bg-gray-800 shadow-lg sm:rounded-2xl max-sm:p-10 max-sm:rounded-md bg-opacity-60 border border-gray-800" style={{ backdropFilter: "blur(20px)" }}>
              <div className='mb-4 md:mb-10 lg:mb-4'>
                <p className='flex justify-start items-center gap-3  text-blue-500 text-lg lg:text-2xl'>
                <svg className='h-[24px] mt-[4px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                  Sign Up
                </p>
              </div>
              <div className="max-w-lg mx-auto">
                <div className="divide-y divide-gray-200">
                  <div className="py-3 text-sm sm:text-base md:text-lg space-y-4 text-white">
                    <div className="grid gap-4 grid-cols-2 sm:gap-6 mb-2">
                      <div>
                        <label htmlFor="firstname" className="block text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">First name</label>
                        <input
                          type="text"
                          name="firstname"
                          label="firstname"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Last name</label>
                        <input
                          type="text"
                          name="lastname"
                          label="lastname"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Doe"
                          required
                        />
                      </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                          type="email"
                          label="email"
                          name="email"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="johndoe@somesite.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Password</label>
                        <div className='flex'>
                        <input
                          type={passwordVisible ? 'text' : 'password'}
                          name="password"
                          label="password"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                          required
                        />
                        <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 mr-8 text-gray-400 hover:text-gray-600 cursor-pointer"
                              >
                                {passwordVisible ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                )}
                        </button>
                        
                      </div> 
                      </div>
                      <div>
                        <label htmlFor="password" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">Repeat password</label>
                        <input
                          type='password'
                          name="password"
                          label="password"
                          className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                          required
                        />
                      </div>
                    

                    <div className='flex flex-col space-y-4 mt-5 ' >
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-base p-3 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-bg-blue-800 "
                      >
                        Sign up
                      </button>
                      <button
                        className="flex justify-center items-center gap-4 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 w-full focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base p-3 text-center dark-bg-red-600 dark-hover-bg-red-700 dark-focus-ring-bg-red-800 "
                      >
                        <svg className='h-[24px] ' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                          <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                          <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                          <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                          <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                        </svg>
                        Continue with Google
                      </button>
                    </div>
                    <div>
                      <h1 className='text-center'>Already have an account? <span className='text-blue-500 cursor-pointer hover:text-blue-300'>Log in</span> </h1>
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