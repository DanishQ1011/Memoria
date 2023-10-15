import React, { useState, useEffect } from 'react';
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [error, setError] =  useState('');
  const {logIn, googleSignIn} = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      <nav className="w-full max-sm:z-10 flex py-[10px] px-[80px] max-sm:py-[6px] justify-between items-center max-container bg-gray-800 max-sm:p-10 bg-opacity-80 border border-gray-800" style={{ backdropFilter: "blur(20px)" }}>
        <a href="/">
          <h1 className="text-[35px] text-blue-500 max-sm:text-[25px]">Memoria</h1>
        </a>

        <div className='flex gap-10 items-center font-medium font-montserrat max-lg:hidden wide:mr-24'>
          {/* {showLoginForm ? ( */}
          <div className="text-blue-500 text-xl leading-normal hover:text-white cursor-pointer">
            <Link to='./signup'>Sign up</Link>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
          style={{ zIndex: 1000 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
        <ul
          className={`${menuVisible ? "block" : "hidden"} lg:hidden absolute top-[2rem] right-5 bg-gray-900 py-2 rounded-md`}
        >
          <div className="flex flex-col  leading-normal font-medium font-montserrat rounded-md text-xl">
            <a className="mx-[30px] text-blue-500 py-2 px-2 " href="/">
                <Link to='./signup'>Sign up</Link>
            </a>
          </div>
        </ul>
      </nav>
      <div className="flex justify-center py-[25px] bg-gray-900 max-sm:p-[20px]">
        <form className="max-w-[1440px] " onSubmit={handleSubmit}>
          <div className="flex max-sm:justify-center ">
            <div className="flex flex-col sm:justify-center ">
              <div className="relative lg:w-[410px] sm:max-w-xl sm:mx-auto md:mb-[100px] lg:mb-30 max-sm:mb-[50px]">
                <div className="relative md:p-5 bg-gray-800 shadow-lg sm:rounded-2xl max-sm:p-10 max-sm:rounded-md bg-opacity-60 border border-gray-800" style={{ backdropFilter: 'blur(20px)' }}>
                  <div className="mb-4 md:mb-10 lg:mb-4">
                    <p className="flex justify-start items-center gap-3  text-blue-500 text-lg lg:text-2xl">
                      <svg className="h-[24px] mt-[3px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      Log in
                    </p>
                  </div>
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        {error}
                    </div>
                    )}
                  <div className="max-w-lg mx-auto">
                    <div className="divide-y divide-gray-200">
                      <div className="py-3 text-sm sm:text-base md:text-lg space-y-4 text-white">
                        <div>
                          <label htmlFor="email" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">
                            Email
                          </label>
                          <input
                            type="email"
                            label="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="johndoe@somesite.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="block mb-1 text-sm sm:mb-2 sm:text-base font-medium text-gray-900 dark:text-white">
                            Password
                          </label>
                          <div className="flex">
                            <input
                              type={passwordVisible ? 'text' : 'password'}
                              name="password"
                              label="password"
                              onChange={(e) => setPassword(e.target.value)}
                              className="block w-full p-2 text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="•••••"
                              required
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute inset-y-35 mt-[10px] right-8 max-sm:right-[50px] max-sm:mt-[7px] text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                              {passwordVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-4 mt-5">
                          <button
                            type="submit"
                            className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 w-full focus:outline-none focus-ring-blue-300 font-medium rounded-lg text-sm sm:text-base p-3 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-bg-blue-800"
                          >
                            Log in
                          </button>
                          <div>
                            <button onClick={handleGoogleSignIn} className="flex justify-center items-center gap-4 text-white bg-gray-700 hover-bg-gray-800 focus-ring-4 w-full focus-outline-none focus-ring-red-300 font-medium rounded-lg text-sm sm:text-base p-3 text-center dark-bg-red-600 dark-hover-bg-red-700 dark-focus-ring-bg-red-800">
                              <svg className="h-[24px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c-24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l-42.356-32.782"></path>
                                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                              </svg>
                              Continue with Google
                            </button>
                          </div>
                          <div>
                            <h1 className="text-center">
                              Don't have an account?{' '}
                              <span className="text-blue-500 cursor-pointer hover:text-blue-300"><Link to='./signup'>Sign up!</Link></span>
                            </h1>
                          </div>
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
    </>
  );
};

export default Login;
