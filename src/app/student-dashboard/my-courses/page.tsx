'use client'

import React from 'react'
import useEnrolledCourseStore from '@/store/Courses'
import DashboardCourse from '../components/DashboardCourse'
function page() {

  const { enrolledCourses } = useEnrolledCourseStore()
  console.log(enrolledCourses.length)

  return (
    <div className='w-full h-full'>
      <div className=' p-6'>
        <h1 className='text-2xl font-bold mb-4'>My Courses</h1>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
          {enrolledCourses.length > 0 ? enrolledCourses.map((course) => (
            <DashboardCourse
              key={course.title}
              title={course.title}
              description={course.description}
              />
          )) : (
            <p className='text-charcoal-black'>You are not enrolled in any courses yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default page