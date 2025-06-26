'use client'
import useEnrolledCourseStore from "@/store/Courses"
// import { toast, ToastContainer } from 'react-toastify' 
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

function DashboardCourse(props: {  title: string,  description: string}) {
  const { enrolledCourses, setEnrolledCourses } = useEnrolledCourseStore()

    const enrolledState =  enrolledCourses.some((course) => course.title === props.title)

    function handleEnroll(){
       if(!enrolledState){
         setEnrolledCourses([...enrolledCourses, { title: props.title, description: props.description }]);
        // toast('You have successfully enrolled')
       }
      
    }

  return (
     <Link href={`/dashboard/course/${props.title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full h-full">
       <div className="p-6 bg-white hover:bg-white/[0.8] rounded-lg shadow-lg flex flex-col justify-between w-full h-full">
       <div className="flex items-center justify-between">
         <h3 className="text-xl font-semibold text-charcoal-black">{props.title}</h3>
         <Badge></Badge>
       </div>
       <p className="mt-4 text-gray-800 text-[12px] inter">{props.description}</p>
       <div className='flex justify-between items-center mt-6'>
            <div></div>
            <span onClick={handleEnroll} className={`{${enrolledState ? 'text-bright-blue': 'md:text-sky-blue'} text-sm text-bright-blue  hover:text-bright-blue cursor-pointer font-extralight hover:underline inter`}>{enrolledState ?'Enrolled': 'Enroll Now'}</span>
       </div>
       {/* <ToastContainer/> */}
       
       </div>
     </Link>
  )
}

export default DashboardCourse