"use client"
import { useState } from "react"
import useUserRoleStore from "@/store/UserRoles"
import LogoPlacement from "./LogoPlacement"
import Image from "next/image"
import Link from 'next/link'

function Step1() {
  const [selectedRole, setSelectedRole] = useState<"instructor" | "student" | null>(null)
  const { setRole } = useUserRoleStore()

  function handleSelect(role: "instructor" | "student") {
    setSelectedRole(role)
    setRole(role)
  }

  return (
    <div className='flex flex-col md:flex-row gap-20 items-center p-4 bg-gray-200'>
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

      <button disabled={selectedRole === null} className={`bg-bright-blue px-6 py-3 font-semibold text-white rounded-full mt-3 self-end w-fit ${selectedRole === null ? 'opacity-50 cursor-not-allowed': 'opacity-100 cursor-pointer'}`}><Link href='/sign-up/step2'>Next</Link></button>
      </div>
    </div>
  )
}

export default Step1