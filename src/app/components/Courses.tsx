import Course from "./Course"
import { easeIn, motion } from "motion/react"

type PropTypes = {
     setCourse: (course: string) => void
}


const items = [

          {    id: 1,
               title: "AI Development", 
               description: "Become an AI Developer! Our intensive cohort teaches you the fundamentals of machine learning, deep learning, and AI development. You'll work on real-world projects, learn to use popular libraries like TensorFlow and PyTorch, and get career support. Launch your AI career today!", 
               img: "/images/ai.jpg" 
          },
          
          {    id: 2,
               title: "Blockchain Development",
               description: "Master Blockchain Development! Learn Solidity, smart contracts, dApps, and security best practices. Build real-world projects and launch your career. Join our expert-led cohort today!",
               img: "/images/blockchain1.jpg" 
          },
          
          {    id: 3,
               title: "Frontend Development",
               description: "Our intensive Web Development Cohort provides the skills you need to build amazing websites. You'll learn to create responsive, dynamic, and user-friendly web applications. We cover version control, and deployment, ensuring you're job-ready. Join our supportive community and build your portfolio with hands-on projects!", 
               img: "/images/frontend.jpg" 
          },
               
          {    id: 4,
               title: "Cybersecurity", 
               description: "Become a Cybersecurity Pro! Master network security, cloud security, incident response, and ethical hacking. Build a strong portfolio and launch your career.", 
               img: "/images/cybersecurity1.jpg" 
          }
     ]
function Courses(props: PropTypes) {
  return (
     <motion.section id='courses' initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration:2, ease:easeIn}} viewport={{once:true, amount:0.05 }} >
          <div  className="container px-4 py-16 mx-auto">
               <h2 className="text-3xl font-bold text-center text-charcoal-black md:text-4xl">Our Courses</h2>
               <p className="mt-4 text-lg font-semibold text-center text-gray-700">Explore our range of courses designed to help you master the latest technologies and skills.</p>
               
               <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">

                    {items.map((item) => (
                                   <Course
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        img={item.img}
                                        setCourse= {props.setCourse}
                                   />
                         ))
                    }
               </div>
          </div>


          
     </motion.section>
  )
}

export default Courses