"use client"
import { useForm } from "react-hook-form"
import Image from "next/image"
import axios from 'axios'
import { useRouter} from 'next/navigation'
import useUserRoleStore from "@/store/UserRoles"

type FormDataTypes = {
  email:string
  password:string
  role: string
}

function SignUpForm() {

    const { role } = useUserRoleStore()
    const router = useRouter()

  const { register, handleSubmit, formState } = useForm<FormDataTypes>(
    {
      mode: "onSubmit",
      defaultValues: {
        email: "",
        password: "",
        role:''
      }
    }
  );

  const { errors } = formState

//   async function onSubmit(data: FormDataTypes){
//       const res = await axios.post("/api/auth/sign-in",
//       {email: data.email, password: data.password}
//     );
//       if (res.data.success) {
//   // Redirect to dashboard or update UI
//   router.push(`/${role}/dashboard`)
// }
//       else{
//         console.error("Login failed:", res.data.error);
//         alert("Log in failed")
//         // Handle error, e.g., show a notification or alert
//       }
//   }
  return (
    <div>
      <Image src='/images/logo-1.png' alt="logo" width={200} height={200} className="m-5"/>
      <form >
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

          <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                    <label htmlFor="student">Student</label>
                    <input
                    type="radio"
                    className="h-4 w-4 text-bright-blue border-gray-300 rounded focus:ring-bright-blue"
                    {...register("role", { required: "Role is required" })}
                    value="student"
                    />
               </div>
               <div className="flex items-center gap-2">
                    <label htmlFor="instructor">Instructor</label>
                    <input 
                    type="radio"
                    
                    />
               </div>
          </div>

          <label className="flex items-center mt-2">
          <input
               type="checkbox"
               className="h-4 w-4 text-bright-blue border-gray-300 rounded focus:ring-bright-blue"
          />
          <span className="ml-2 text-sm text-gray-400">Remember me</span>
          </label>

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

export default SignUpForm