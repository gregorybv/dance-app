import React from "react"
import { RxArrowRight } from "react-icons/rx"

const JustRide = () => {
  return (
    <section>
      <div className='max-w-[1280px] w-full mx-auto'>
        <h2 className='text-6xl'>Just ride—we’ll take care of the rest</h2>
        <p>
          Your local Concierge Team will repair or replace your ride within 24
          hours—all included with your subscription.
        </p>
        <button className='button flex items-center text-[#2E2C34]'>
          See details
          <RxArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default JustRide
