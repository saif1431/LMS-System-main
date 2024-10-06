import React from 'react'
import img from '../assets/featuresImg.png'

function HomeFeatures() {
  return (
    <div className='flex flex-col items-center justify-around px-6 py-4 lg:flex-row' >
      <div className='w-[40%]'>
            <img className='w-[70%]' src={img} alt="" />
      </div>
      <div className='flex flex-col w-1/2 gap-3'>
            <h4 className='text-2xl text-[#333333] font-bold'>Our Platform’s Key Features</h4>
           
            <div className='space-y-4 '>
                  <li className='text-[#333]'><span className=' text-[#555] font-bold '>Personalized Learning:</span> Tailored programs to fit individual student needs, ensuring progress at your own pace.</li>
                  <li className='text-[#333]'><span className=' text-[#555] font-bold '>24/7 Support:</span> From teachers to admins, we provide constant guidance and solutions.</li>
                  <li className='text-[#333]'><span className=' text-[#555] font-bold '>Industry Expertise:</span> Courses led by professionals, equipping you with practical, job-ready skills</li>
                  <li className='text-[#333]'><span className=' text-[#555] font-bold '>Commitment to Success:</span> We’re dedicated to helping you reach your academic and career goals.</li>
            </div>
      </div>
    </div>
  )
}

export default HomeFeatures
