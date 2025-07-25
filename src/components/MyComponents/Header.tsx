'use client'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Input } from '@/components/ui/input'

import DarModeToggle from "./DarModeToggle"
import Link from "next/link"
// import { SignedOut,SignInButton,SignUpButton, SignedIn, UserButton } from "@clerk/nextjs"


function Header() {

     const [isOpen, setIsOpen] = useState(false);

     function toggleMenu(){
          setIsOpen(prev => !prev)
     }

     // function handleSmoothScroll(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId:string){
     //      e.preventDefault();
     //      const targetElement = document.getElementById(targetId)
     //      if(targetElement){
     //          targetElement.scrollIntoView({behavior: 'smooth'})
     //      }
     //  }

     //  const style={
     //      backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent white background
     //      backdropFilter: "blur(10px)", // Apply blur effect
     //      WebkitBackdropFilter: "blur(10px)", // For Safari support
     //      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
     //    }
     

  return (
    <header id="header" className=" sticky top-[16px] left-0 right-0 "  >
          <div className="container mx-auto flex items-center justify-between px-5 py-3 bg-[#FEFEFE] shadow-lg rounded-[20px]">
               <nav className="hidden w-full md:flex md:justify-between md:items-center">
                    <Link href="/"><img src="/images/logo-1.png" alt="logo" className="w-[104px] md:w-[104px]"/></Link>
                    
                    <ul className="flex items-center pl-10 gap-6 w-3/4" >
                              <li className=""><Link href="/" className=" text-[#606060] hover:text-bright-blue text-sm">Home</Link></li>
                              <li className=""><Input type="text" placeholder="What interest you to learn today?" className="text-[#A4A4A4] mr-8 text-sm input-with-icon rounded-[12px]"/></li>
                              <li className=""><Link href=""  className="text-[#606060] hover:text-bright-blue text-sm">Resources</Link></li>
                              <li className=""><Link href="/sign-up" className="text-[#606060] hover:text-bright-blue text-sm">Meet Eazify</Link></li>
                              <li className=""><Link href=""  className="text-[#606060] hover:text-bright-blue text-sm">Become a tutor</Link></li>
                    </ul>

                    <div className=" ">
                              <Link href='/sign-in'><button className="py-3 px-5 grotesk text-white rounded-[8px] cursor-pointer bg-bright-blue border border-sky-blue font-semibold">Sign in</button></Link>
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
                                   <li className="font-semibold" onClick={toggleMenu}><Link  href="/" className="text-bright-blue">Home</Link></li>
                                   <li className="font-semibold" onClick={toggleMenu}><Link  href="#about"  className="text-bright-blue">About</Link></li>
                                   <li className="font-semibold" onClick={toggleMenu}><Link href="#courses" className="text-bright-blue">Courses</Link></li>
                                   <li className="font-semibold" onClick={toggleMenu}><Link href="#footer"  className="text-bright-blue">Contact</Link></li>
                              </ul>
                              <div className="flex justify-center mb-4 flex-col w-fit mx-auto gap-4 ">

                                   <button className="px-6 py-3 font-semibold text-sky-blue hover:text-white rounded-full cursor-pointer bg-white border-2 border-sky-blue hover:bg-bright-blue">SIGN UP</button>
                                   <button className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-sky-blue hover:bg-bright-blue" >LOGIN</button>

                              
                              </div>
                         </div>
                    )
               }
               
               
          </div>
    </header>
  )
}

export default Header