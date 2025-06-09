import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "motion/react";

function Header() {

     const [isOpen, setIsOpen] = useState(false);

     function toggleMenu(){
          setIsOpen(prev => !prev)
     }

     function handleSmoothScroll(e:any, targetId:string){
          e.preventDefault();
          const targetElement = document.getElementById(targetId)
          if(targetElement){
              targetElement.scrollIntoView({behavior: 'smooth'})
          }
      }

      const style={
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }
     

  return (
    <header id="header" className="container mx-auto sticky top-[5px] left-0 right-0 z-50 px-4  shadow-lg rounded-xl" style={style} >
          <div className="container flex items-center justify-between px-4 py-4 ">
               <a href="/"><img src="/images/logo-1.png" alt="logo" className="w-[130px] md:px-0 md:w-[190px] px-4"/></a>
               
               <nav className="hidden w-full md:flex md:justify-between md:items-center">
                    
                    <ul className="flex items-center justify-center gap-6 ml-auto" >
                              <li className="font-semibold"><a onClick={(e) => {handleSmoothScroll(e,'hero')}} href="/" className="hover:text-bright-blue">Home</a></li>
                              <li className="font-semibold"><a onClick={(e) => {handleSmoothScroll(e,'about')}} href="#about"  className="hover:text-bright-blue">About</a></li>
                              <li className="font-semibold"><a onClick={(e) => {handleSmoothScroll(e,'courses')}} href="#courses" className="hover:text-bright-blue">Courses</a></li>
                              <li className="font-semibold"><a onClick={(e) => {handleSmoothScroll(e,'footer')}} href="#footer"  className="hover:text-bright-blue">Contact</a></li>
                    </ul>
                    <div className="ml-auto">
                         <motion.button whileHover={{scale:1.1}} className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-sky-blue hover:bg-bright-blue" onClick={(e) => {handleSmoothScroll(e,'form')}}>Register Here</motion.button>
                    </div>
                    
               </nav>

               <nav className="md:hidden">
                    <Menu onClick={toggleMenu}/>
               </nav>
               
               {
                    isOpen && (
                         <div className="absolute top-0 left-0 right-0 h-[50vh] pt-4 bg-white shadow-lg rounded-xl md:hidden" >
                              <div className="flex justify-end px-4 mt-6  w-[96%]">
                                   <X onClick={toggleMenu}/>
                              </div>
                              <ul className="flex flex-col items-center justify-center gap-4 p-4">
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'hero')}} href="/" className="text-bright-blue">Home</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'about')}} href="#about"  className="text-bright-blue">About</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'courses')}} href="#courses" className="text-bright-blue">Courses</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'footer')}} href="#footer"  className="text-bright-blue">Contact</a></li>
                              </ul>
                              <div className="flex justify-center mb-4">
                                   <button className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-sky-blue hover:bg-bright-blue" onClick={(e) => {handleSmoothScroll(e,'form'); toggleMenu()}}>Register Here</button>
                              </div>
                         </div>
                    )
               }
               
               
          </div>
    </header>
  )
}

export default Header