import React from "react"
import works from "../assets/works.png"

const Works = () => {
  
  return (
    <section className='max-w-[1280px] w-full mx-auto flex justify-between pl-32 mt-16 mb-[73px]'>
      <div>
        <h2 className='text-6xl'>How it works</h2>
        <ul className='mt-[71px]'>
          <li className='text-2xl'>1. Pick your city</li>
          <li className='text-2xl'>2. Choose your ride</li>
          <li className='text-2xl'>3. Delivery to your door</li>
          <li className='text-2xl'>4. Ride freely</li>
        </ul>
        <button className='button bg-blue-500 mt-[51px] '>Start now</button>
      </div>
      <img src={works} alt='works' />
    </section>
  )
}

export default Works
