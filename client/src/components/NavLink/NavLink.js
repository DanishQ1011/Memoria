import React, { useState } from "react";

const NavLink = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
      <nav className=" w-full max-sm:z-10 flex py-[10px] px-[80px] max-sm:py-[6px] justify-between items-center max-container bg-gray-800 max-sm:p-10 bg-opacity-80 border border-gray-800" style={{ backdropFilter: "blur(20px)" }}>
        <a href="/">
          <h1 className="text-[35px] text-blue-500 max-sm:text-[25px]">Memoria</h1>
        </a>

        <div className='flex gap-10 items-center font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <div className="text-blue-500 text-xl leading-normal hover:text-white">
          <a href='/'>Log in</a>
        </div>
        {/* <div className="text-gray-800 text-xl bg-blue-500 p-[8px] rounded-md leading-normal hover:text-white">
          <a href='/'>Sign up</a>
        </div> */}
        </div>
        
        {/* This is for the hamburger menu 👇🏼*/}

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
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
        <ul
          className={`${
            menuVisible ? "block" : "hidden"
          } lg:hidden absolute top-[6rem] right-5 bg-gray-900 py-2 rounded-md` }
        >
          
          <div className="flex flex-col  leading-normal font-medium font-montserrat rounded-md text-xl">
            <a className="mx-[30px] text-blue-500 py-2 px-2 " href="/">
              Log in 
            </a>
            {/* <a className="mx-[30px] text-blue-500 py-2 px-2 " href="/">
              Sign Up
            </a> */}
          </div>
        </ul>
      </nav>
  );
};

export default NavLink;





