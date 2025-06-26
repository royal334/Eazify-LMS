'use client'
import useEnrolledCourseStore from "@/store/Courses"
//import { toast, ToastContainer } from 'react-toastify' 
//import { Badge } from "@/components/ui/badge"


function DashboardCourse(props: {  title: string,  description: string}) {
  const { enrolledCourses, setEnrolledCourses } = useEnrolledCourseStore()

    const enrolledState =  enrolledCourses.some((course) => course.title === props.title)

    function handleEnroll(){
       if(!enrolledState){
        // Add the current course to the enrolledCourses array
        setEnrolledCourses([...enrolledCourses, { title: props.title, description: props.description }]);
        // toast('You have successfully enrolled')
       }
      
    }

  return (
    //  <Link href={`/dashboard/course/${props.title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full h-full">
       <div className="p-6 bg-white hover:bg-white/[0.8] rounded-lg shadow-lg flex flex-col justify-between w-full h-full">
       <div className="flex items-center justify-between">
         <h3 className="text-xl font-semibold text-charcoal-black">{props.title}</h3>
       </div>
       <p className="mt-4 text-gray-800 text-[12px] inter">{props.description}</p>
       <div className='flex justify-between items-center mt-6'>
            <div></div>
            <button onClick={handleEnroll} className={`${enrolledState ? 'bg-bright-blue': 'bg-sky-blue'} p-2 rounded text-sm text-white cursor-pointer font-semibold inter z-30`}>{enrolledState ?'Enrolled': 'Enroll Now'}</button>
       </div>
     {/* <ToastContainer/> */}
       
       </div>
    //  {/* </Link> */}
  )
}

export default DashboardCourse