import { easeOut, motion } from "motion/react"

function About() {
  return (
     <motion.section id="about" initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration:2, ease:easeOut}} viewport={{once:true, amount:0.2}}>
       <div  className="container flex flex-col items-center justify-between gap-8 px-4 py-10 mx-auto m md:flex-row md:px-0 md:py-16">
            <div className="flex flex-col self-start w-full md:w-1/2">
               <h2 className="text-3xl font-bold text-charcoal-black md:text-4xl">Join Us and Level Up Your Tech Skills with Our Immersive Cohort!</h2>
               <p className="mt-4 mb-4 font-semibold text-gray-700 md:text-lg">Are you ready to transform your career and unlock new opportunities in the tech world? Our intensive cohort program provides a dynamic learning environment where you'll master in-demand tech skills. Designed for both beginners and those looking to upskill, our program offers:</p>
               <ul className="flex flex-col gap-4">
                    <li className="text-gray-500 listing"><span className="font-semibold text-charcoal-black">Hands-on Projects</span>: Learn by doing! You'll work on real-world projects, building your portfolio and practical experience.</li>
                    <li className="text-gray-500 listing"><span className="font-semibold text-charcoal-black">Expert Mentorship</span>: Receive personalized guidance from experienced professionals in the field.</li>
                    <li className="text-gray-500 listing"><span className="font-semibold text-charcoal-black">Supportive Community</span>: Connect with fellow learners, share your progress, and build lasting relationships.</li>
                    
               </ul>
            </div>
            <div className="mt-8 md:w-1/2 md:mt-0">
               <img src="/images/about-image.jpg" alt="About Us" className="w-full mx-auto rounded-lg shadow-lg" />
            </div>
       </div>
     </motion.section>
  )
}

export default About