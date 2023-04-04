import React, { useState } from "react"
import logo from "../assets/logo.svg"
import { FaBars } from "react-icons/fa"

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='flex justify-between items-center pt-4 px-4'>
      <img src={logo} alt='logo dance' />
      <ul className='hidden sm:flex gap-9'>
        <li className='text-lg text-white'>
          <a href='#'>Concierge</a>
        </li>
        <li className='text-lg text-white'>
          <a href='#'>Rides</a>
        </li>
        <li className='text-lg text-white'>
          <a href='#'>For Business</a>
        </li>
      </ul>
      <button className='button hidden sm:flex '>
        Start now
      </button>
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 w-full left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='#'>Concierge</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#'>Rides</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#'>For Business</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
