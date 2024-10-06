import React from 'react'
import InstructorCard from './InstructorCard'

function HomeCourses() {
  return (
    <div className='mx-auto mt-12 p-8 max-w-7xl bg-[#333333] flex flex-col '>
     <div className='pt-12 text-center text-white'>
      <h3 className='text-2xl font-bold'>Popular Courses</h3>
      <p className='py-3 text-md'>Our most popular and demanding Courses</p>
     </div>
<div className='flex flex-wrap items-center'>
<InstructorCard/>
<InstructorCard/>
<InstructorCard/>
<InstructorCard/>
</div>




<button className='py-2 px-2 rounded-full text-sm m-auto mt-4 text-white btn bg-[#3E8982] '>View All</button>
    </div>
  )
}

export default HomeCourses
