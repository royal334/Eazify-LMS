"use client"
import { useForm } from "react-hook-form"
import Image from "next/image"
import axios from 'axios'
import { useRouter} from 'next/navigation'
import useUserRoleStore from "@/store/UserRoles"

type FormDataTypes = {
  email:string
  password:string
}

function SignInForm() {

    const { role } = useUserRoleStore()
    const router = useRouter()

  const { register, handleSubmit, formState } = useForm<FormDataTypes>(
    {
      mode: "onSubmit",
      defaultValues: {
        email: "",
        password: ""
      }
    }
  );

  const { errors } = formState


  return (
    <div>
      <Image src='/images/logo-1.png' alt="logo" width={200} height={200} className="m-5"/>
      <form>
        <div className="flex flex-col items-center justify-center h-[70vh] text-center ">
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <div className="flex flex-col items-start">
               <label htmlFor="email" className="mb-1">Email</label>
               <input
                 type="email"
                 placeholder="example@gmail.com"
                 className="border border-gray-300 p-2 rounded  w-80"
                 {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })}
               />
          </div>
          {errors.email && <span className="text-red-500 text-sm mb-2">{errors.email.message}</span>}

          <div className="flex flex-col items-start">
               <label htmlFor="password" className="mt-2 mb-1">Password</label>
               <input
               type="password"
               placeholder="Password"
               className="border border-gray-300 p-2 rounded w-80"
               {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })}
               />
          </div>

          {errors.password && <span className="text-red-500 text-sm mb-2">{errors.password.message}</span>}
          <button
            type="submit"
            className="bg-bright-blue text-white px-4 py-2 mt-4 rounded-md hover:bg-sky-blue transition-colors duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm