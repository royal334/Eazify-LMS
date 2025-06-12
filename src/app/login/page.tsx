import Image from "next/image"
import Link from "next/link"

function page() {
  return (
          <>
               <div className=""> 
                    <Image src='/images/logo-1.png' width={200} height={200} alt='logo' className="mt-4 ml-4"/>
                    <div className="flex justify-center items-center h-screen">
                         <div className="container mx-4 md:mx-0 md:max-w-[600px] border-2 border-gray-300 rounded-md p-6 shadow-lg">
                              <label htmlFor="">Email</label>
                              <input type="email" className="border-2 border-gray-300 rounded-md p-2 w-full" placeholder="Enter your email" />
                              <label htmlFor="" className="mt-4">Password</label>
                              <input type="password" className="border-2 border-gray-300 rounded-md p-2 w-full" placeholder="Enter your password" />
                              <div className="flex flex-col">
                                   <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign up</button>
                                   <Link href='/dashboard'className="w-full"><button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full">Login</button></Link>
                              </div>
                         </div>
                    </div> 

               </div>
          
          
          </>
  )
}

export default page