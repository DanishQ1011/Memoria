import React, { useState } from "react";
import { Link } from 'react-router-dom';

const NavLink = () => {
  const [menuVisible, setMenuVisible] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <nav className="w-full max-sm:z-10 flex py-[10px] px-[80px] max-sm:py-[6px] justify-between items-center max-container bg-gray-800 max-sm:p-10 bg-opacity-80 border border-gray-800" style={{ backdropFilter: "blur(20px)" }}>
        <a href="/">
          <h1 className="text-[35px] text-blue-500 max-sm:text-[25px]">Memoria</h1>
        </a>

        <div className='flex gap-10 items-center font-medium font-montserrat max-lg:hidden wide:mr-24'>
          {/* {showLoginForm ? ( */}
            <div className="text-blue-500 text-xl leading-normal hover:text-white cursor-pointer">
                <Link to='./signup'>Sign up</Link>
            </div>
          {/* ) : (
            <div className="flex gap-10 items-center">
              <div className="flex items-center font-normal gap-4">
                <img className='h-[32px] rounded-md' src='https://wallpapers.com/images/high/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.webp ' alt='Image'/>
                <p className="text-lg text-blue-300">Shah Abul Kalam</p>
              </div>
              <div className="text-blue-500 text-xl leading-normal hover:text-white">
                <p className="cursor-pointer" onClick={() => toggleLoginForm()}>Log out</p>
              </div>
            </div>
          )} */}
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
          className={`${menuVisible ? "block" : "hidden"} lg:hidden absolute top-[6rem] right-5 bg-gray-900 py-2 rounded-md`}
        >
          <div className="flex flex-col  leading-normal font-medium font-montserrat rounded-md text-xl">
            <a className="mx-[30px] text-blue-500 py-2 px-2 " href="/">
              Log in 
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavLink;