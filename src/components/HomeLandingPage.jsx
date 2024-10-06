import React from 'react'
import heroImg from '../assets/heroImg1.png'
import { FaArrowRightLong } from "react-icons/fa6";

function HomeLandingPage() {
  return (
    <div className='flex flex-col lg:flex-row  justify-between max-w-6xl mx-auto mt-4 bg-[#FFF9E7] rounded-lg'>
     <div className='p-8'>
      <h1 className='text-[#333333] text-2xl lg:text-4xl font-bold '><span className='text-[#FEB705]'>Al Mohandes</span> Educational Institution
</h1>
<h3 className='text-2xl lg:text-3xl font-bold text-[#333333] py-3' > Your Partner on the Path to Success</h3>
      <p className='w-[100%] lg:w-[70%] py-6 text-[#333333]'>Providing innovative tools and personalized support to help you achieve your academic goals.</p>
      <button className='flex items-center gap-2 bg-[#3E8982] text-white px-6 py-2 rounded-full'>Get Started <span><FaArrowRightLong /></span> </button>
     </div>
     <div className=' w-full lg:w-[30%]'>
      <img  className='w-full' src={heroImg} alt="" />
     </div>
    </div>
  )
}

export default HomeLandingPage
