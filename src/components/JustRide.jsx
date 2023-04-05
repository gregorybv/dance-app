import React from "react"
import { RxArrowRight } from "react-icons/rx"
import women from "../assets/women.png"

const JustRide = () => {
  return (
    <section className='max-w-[1280px] w-full mx-auto flex justify-between items-center mt-32'>
      <div className='max-w-[510px] pl-32'>
        <h2 className='text-6xl'>Just ride—we’ll take care of the rest</h2>
        <p className='text-lg mt-[26px]'>
          Your local Concierge Team will repair or replace your ride within 24
          hours—all included with your subscription.
        </p>
        <button className='button flex items-center text-[#2E2C34] text-lg border-2 border-[#2E2C34] mt-[39px] hover:bg-blue-500 hover:text-white hover:border-blue-500'>
          See details
          <RxArrowRight size={20} />
        </button>
      </div>
      <img src={women} alt='women' />
    </section>
  )
}

export default JustRide
