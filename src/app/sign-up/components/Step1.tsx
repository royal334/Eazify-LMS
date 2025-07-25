"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import LogoPlacement from "./LogoPlacement"
import useUserRoleStore from "@/store/UserRoles"
import Image from "next/image"
import  useRegistrationStore  from "@/store/Registeration"
import useIsMobile from "@/hooks/useIsMobile"

function Step1() {
  const [selectedRole, setSelectedRole] = useState<"instructor" | "student" | null>(null)
  const router = useRouter()
  const { setRole } = useUserRoleStore()
  const { setField }= useRegistrationStore()
  const isMobile = useIsMobile()

  function handleSelect(role: "instructor" | "student") {
    setSelectedRole(role)
    setRole(role)
    setField('role', role.toUpperCase())
  }

  // Desktop version
  const renderDesktop = () => (
    <div className='flex-col md:flex-row gap-20 items-center p-4 bg-gray-200 md:flex hidden'>
      <LogoPlacement/>
      <div className="flex flex-col ">
        <div
          className={`p-1 rounded-[30px] cursor-pointer ${selectedRole === "instructor" ? "bg-sky-blue" : "bg-gray-300"}`}
          onClick={() => handleSelect("instructor")}
        >
          <Image src='/images/tutor.png' alt="" height={285} width={424}/>
        </div>
        <div
          className={`p-1 rounded-[30px] cursor-pointer mt-10 ${selectedRole === "student" ? "bg-sky-blue" : "bg-gray-300"}`}
          onClick={() => {handleSelect("student")}}
        >
          <Image src='/images/student.png' alt="" height={285} width={424}/>
        </div>

      <button onClick={() => {router.push('/sign-up/step2')}} disabled={selectedRole === null} className={`bg-bright-blue px-6 py-3 font-semibold text-white rounded-full mt-3 self-end w-fit ${selectedRole === null ? 'opacity-50 cursor-not-allowed': 'opacity-100 cursor-pointer'}`}>Next</button>
      </div>
    </div>
  );

  // Mobile version
  const renderMobile = () => (
    <div className="flex flex-col md:hidden min-h-screen bg-gray-100 pb-6">
      <LogoPlacement/>
      <div className="flex flex-col w-full max-w-xs mt-8 mx-auto">
        <div
          className={`p-1 rounded-[20px] cursor-pointer ${selectedRole === "instructor" ? "bg-sky-blue" : "bg-gray-300"}`}
          onClick={() => handleSelect("instructor")}
        >
          <Image src='/images/tutor.png' alt="" height={180} width={270} className="w-full h-auto rounded-[18px]"/>
        </div>
        <div
          className={`p-1 rounded-[20px] cursor-pointer mt-6 ${selectedRole === "student" ? "bg-sky-blue" : "bg-gray-300"}`}
          onClick={() => handleSelect("student")}
        >
          <Image src='/images/student.png' alt="" height={180} width={270} className="w-full h-auto rounded-[18px]"/>
        </div>
        <button onClick={() => {router.push('/sign-up/step2')}} disabled={selectedRole === null} className={`bg-bright-blue px-4 py-2 font-semibold text-white rounded-full mt-4 w-full ${selectedRole === null ? 'opacity-50 cursor-not-allowed': 'opacity-100 cursor-pointer'}`}>Next</button>
      </div>
    </div>
  );

  return (
    <>
    { isMobile ? renderMobile() :  renderDesktop()}
    </>
  )
}

export default Step1