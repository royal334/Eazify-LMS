'use client'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "motion/react"
import DarModeToggle from "./DarModeToggle"
import Link from "next/link"
// import { SignedOut,SignInButton,SignUpButton, SignedIn, UserButton } from "@clerk/nextjs"
import useUserRoleStore from "@/store/UserRoles"

function Header() {

     const [isOpen, setIsOpen] = useState(false);
     const { role } = useUserRoleStore()

     function toggleMenu(){
          setIsOpen(prev => !prev)
     }

     function handleSmoothScroll(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId:string){
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
               <Link href="/"><img src="/images/logo-1.png" alt="logo" className="w-[130px] md:px-0 md:w-[190px] px-4"/></Link>
               
               <nav className="hidden w-full md:flex md:justify-between md:items-center">
                    
                    <ul className="flex items-center justify-center gap-6 ml-auto" >
                              <li className="font-semibold"><Link onClick={(e) => {handleSmoothScroll(e,'hero')}} href="/" className="hover:text-bright-blue">Home</Link></li>
                              <li className="font-semibold"><Link onClick={(e) => {handleSmoothScroll(e,'about')}} href="#about"  className="hover:text-bright-blue">About</Link></li>
                              <li className="font-semibold"><Link onClick={(e) => {handleSmoothScroll(e,'courses')}} href="#courses" className="hover:text-bright-blue">Courses</Link></li>
                              <li className="font-semibold"><Link onClick={(e) => {handleSmoothScroll(e,'footer')}} href="#footer"  className="hover:text-bright-blue">Contact</Link></li>
                    </ul>
                    <div className="ml-auto flex items-center gap-4 ">
                         {/* <SignedIn>
                              <button className="bg-bright-blue px-2 py-1 text-white  rounded"><Link  href={`/${role}-dashboard`} className="inter">Dashboard</Link></button>
                         </SignedIn> */}
                         <DarModeToggle/>
                    
                              <motion.button whileHover={{scale:1.1}} className="px-6 py-3 font-semibold text-sky-blue hover:text-white rounded-full cursor-pointer bg-white border-2 border-sky-blue hover:bg-bright-blue">SIGN UP</motion.button>
                              <motion.button whileHover={{scale:1.1}} className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-sky-blue hover:bg-bright-blue" >LOGIN</motion.button>
                         
                         {/* <SignedIn>
                              <UserButton/>
                         </SignedIn> */}
                    </div>
                    
               </nav>

               <nav className="md:hidden flex gap-2 items-center">
                    <DarModeToggle/>
                    <Menu onClick={toggleMenu}/>
               </nav>
               
               {
                    isOpen && (
                         <div className="absolute top-0 left-0 right-0 h-[50vh] pt-4 bg-white shadow-lg rounded-xl md:hidden" >
                              <div className="flex justify-end px-4 mt-6  w-[96%]">
                                   <X onClick={toggleMenu}/>
                              </div>
                              <ul className="flex flex-col items-center justify-center gap-4 p-4">
                                   <li className="font-semibold" onClick={toggleMenu}><Link onClick={(e) => {handleSmoothScroll(e,'hero')}} href="/" className="text-bright-blue">Home</Link></li>
                                   <li className="font-semibold" onClick={toggleMenu}><Link onClick={(e) => {handleSmoothScroll(e,'about')}} href="#about"  className="text-bright-blue">About</Link></li>
                                   <li className="font-semibold" onClick={toggleMenu}><Link onClick={(e) => {handleSmoothScroll(e,'courses')}} href="#courses" className="text-bright-blue">Courses</Link></li>
                                   <li className="font-semibold" onClick={toggleMenu}><Link onClick={(e) => {handleSmoothScroll(e,'footer')}} href="#footer"  className="text-bright-blue">Contact</Link></li>
                              </ul>
                              <div className="flex justify-center mb-4 flex-col w-fit mx-auto gap-4 ">
                              {/* <SignedIn>
                              <button className="bg-bright-blue px-2 py-1 text-white  rounded"><Link href={`/${role}-dashboard`} className="inter">Dashboard</Link></button>
                         </SignedIn> */}
                              
                                   <motion.button whileHover={{scale:1.1}} className="px-6 py-3 font-semibold text-sky-blue hover:text-white rounded-full cursor-pointer bg-white border-2 border-sky-blue hover:bg-bright-blue">SIGN UP</motion.button>
                                   <motion.button whileHover={{scale:1.1}} className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-sky-blue hover:bg-bright-blue" >LOGIN</motion.button>
                              
                              </div>
                         </div>
                    )
               }
               
               
          </div>
    </header>
  )
}

export default Header