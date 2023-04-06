import React from "react"
import { GrFormCheckmark } from "react-icons/gr"
import bike1 from "../assets/bike1.png"
import bike2 from "../assets/bike2.png"

const data = [
  {
    image: bike1,
    price: "From €59 €39 / mo",
    title: "Dance One Step",
    model: "Ebike",
    button: "Start now",
  },
  {
    image: bike2,
    price: "From €89 €39 / mo",
    title: "Dance Moped",
    model: "Ebike",
    button: "Start now",
  },
]

const Charge = () => {
  return (
    <section className='max-w-[1280px] w-full mx-auto flex justify-between items-center mt-32'>
      <div className='max-w-[334px] ml-[120px]'>
        <h2 className='text-6xl'>You’re in charge</h2>
        <p className='text-2xl mt-[27px]'>
          Your subscription is fully flexible—with free cancelation at any time
          and no sign-up fees.
        </p>
        <ul className='mt-[36px]'>
          <li className='text-xl flex items-center gap-[10px] mt-1 bg-gray-200 rounded-xl max-w-xs'>
            <GrFormCheckmark />
            Repairs within 24 hours
          </li>
          <li className='text-xl flex items-center gap-[10px] mt-1 bg-gray-200 rounded-xl max-w-xs'>
            <GrFormCheckmark />
            Replacements in case of theft
          </li>
          <li className='text-xl flex items-center gap-[10px] mt-1 bg-gray-200 rounded-xl max-w-xs'>
            <GrFormCheckmark />
            App to track your rides
          </li>
          <li className='text-xl flex items-center gap-[10px] mt-1 bg-gray-200 rounded-xl max-w-xs'>
            <GrFormCheckmark />
            Cancel anytime
          </li>
        </ul>
      </div>

      {data.map((el, index) => (
        <div
          key={index}
          className='flex flex-col items-center gap-[16px] bg-gray-200 p-2 rounded-3xl'
        >
          <img src={el.image} alt='bike1' />
          <p>{el.price}</p>
          <h3 className='text-2xl'>{el.title}</h3>
          <p className='text-xl'>{el.model}</p>
          <button className='button bg-blue-500'>{el.button}</button>
        </div>
      ))}
    </section>
  )
}

export default Charge
