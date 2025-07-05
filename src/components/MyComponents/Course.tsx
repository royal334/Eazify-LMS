import Link from 'next/link'
import { easeIn, motion } from "motion/react";

type CourseProps = {
     title: string;
     description: string;
     img:string

     
}

function Course(props: CourseProps) {


  return (
     <motion.div initial={{x:-50, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:1, ease:easeIn}}  viewport={{once:true, amount:0.3}} className="p-6 bg-white dark:bg-black dark:border-2 dark:border-white rounded-lg shadow-lg flex flex-col">
          <h3 className="text-xl font-semibold text-charcoal-black dark:text-white">{props.title}</h3>
          <img src={props.img} alt='' className="w-full mt-4 rounded-lg shadow-md h-auto md:h-[400px]"/>
          <p className="mt-4 text-gray-800 dark:text-gray-300">{props.description}</p>
     </motion.div>
  )
}

export default Course