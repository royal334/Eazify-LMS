"use client"
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLogin } from "@/hooks/login";
import { useUserProfile } from "@/hooks/user-profile";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

type FormDataTypes={
  email:string
  password:string
}
function Step1() {
  const { mutate, isPending, isError, error } = useLogin();
  const { data } = useUserProfile();
  const role = data?.role;
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useIsMobile();

  const { register, handleSubmit, formState } = useForm<FormDataTypes>(
    {
      mode: 'onChange',
      defaultValues: {
        email: "",
        password:"",
      },
    }
  );

  const { errors, isValid } = formState;
  const router = useRouter()


  function onSubmit(data:FormDataTypes){

    mutate({
      email: data.email,
      hash: data.password
    },
    {
      onSuccess:() =>{
        router.push(`/${role}-dashboard`)
      },

    })
  }

        const styles={
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
         // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }

  // Shared form for desktop and mobile
  const renderForm = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" ,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email is not valid'
              }})}
          className={`p-2 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div className="flex flex-col gap-2 relative">
        <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your Password"
          {...register("password", { required: "Password is required",minLength: { value: 8, message: "Password must be at least 8 characters" } })}
          className={`p-2 border rounded-xl pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
        />
        <button
          type="button"
          className={`absolute right-3 ${errors.password ? "top-[40%]" :"top-[56%]"} text-gray-500`}
          tabIndex={-1}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        {isError && <span className="text-red-500 text-sm">{error.message}</span>}
      </div>
      <button type="submit" disabled={!isValid || isPending} className={`bg-[#0071FF] text-white p-3 rounded-lg cursor-pointer transition duration-200 disabled:bg-[#0071FF99] disabled:cursor-not-allowed`}>{isPending ? "Logining in":"Continue"}</button>
      <p className="text-sm text-[#5E6368] text-center ">Or continue with</p>
      <button className="rounded-lg cursor-pointer p-3 bg-[#E0E0E0] flex justify-center items-center"><Image src='/images/google.png' alt="sign up with google" width={24} height={24}/></button>
      <span className="font-normal text-center">First time? <Link href='/sign-up' className="text-bright-blue "> Create an account</Link></span>
    </form>
  );

  return (
    <>
      
      {isMobile ?       
      <div className="flex flex-col md:hidden min-h-screen items-center">
        <div className="w-full pb-6">
          <div className="w-full bg-gradient-to-b from-[#4BA2FF] to-[#0071FF] px-8 pt-16 pb-12">
            <div className="border rounded-[18px] p-6 border-gray-50/80" style={styles}>
              <div className="bg-gradient-to-b from-[#000000] to-[#00285B] rounded-[15px] step1-mobile min-h-[30vh] flex items-end">
                <p className="text-[#E0E0E0] text-2xl m-6">Sign in to your account</p>
              </div>
            </div>
          </div>
            <div className="bg-white w-full h-full p-4  mt-4">
              {renderForm()}
            </div>
        </div>
      </div> :  
      <div className="md:flex items-center justify-center h-screen p-11 hidden">
        <div className="step1 w-full rounded-4xl p-[40px] mx-auto">
          <div className="p-10  rounded-[38px]" style={styles}>
            <div className="bg-white w-full h-full p-10 rounded-[16px]">
              <h1 className="text-charcoal-black text-5xl font-bold text-center ">Sign in to your account</h1>
              <div className="mx-auto w-1/2 mt-10">
                {renderForm()}
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </>
  )
}

export default Step1