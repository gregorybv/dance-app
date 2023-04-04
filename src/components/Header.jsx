import React from "react"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className='bg-fuchsia-400'>
      <div className='max-w-[1280px] w-full h-[800px] mx-auto'>
        <NavBar />
        <div className='flex flex-col items-center max-w-[540px] text-center mx-auto mt-36'>
          <h1 className='text-8xl text-white'>Your future is electric</h1>
          <p className='w-[293px] text-center text-xl text-white mt-10'>
            Get your own ebike or emoped with our flexible subscription
          </p>
          <button className='button mt-14'>Start now</button>
        </div>
      </div>
    </header>
  )
}

export default Header
