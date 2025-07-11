"use client"
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FormDataTypes={
  email:string
  password:string
}
function Step2() {

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

  const onSubmit = async () =>{
    
    router.push('/sign-up/step3')
  }

        const styles={
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
         // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }

  return (
    <div className="flex items-center justify-center h-screen p-11 ">
      <div className="step2 w-full rounded-4xl p-[40px] mx-auto">
        <div className="p-10  rounded-[38px]" style={styles}>
          <div className="bg-white w-full h-full p-10 rounded-[16px]">
            <h1 className="text-charcoal-black text-5xl font-bold text-center ">Become a student</h1>
            <p className="text-[#3F3F3F] mt-2 mb-4 text-center">Your are one step to achieving your dream</p>
            <div className="mx-auto w-1/2 mt-14">
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

                  <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold">Password</Label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    {...register("password", { required: "Password is required",minLength: { value: 8, message: "Password must be at least 8 characters" } })}
                    className={`p-2 border rounded-xl ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <button type="submit" disabled={!isValid} className={`bg-[#0071FF] text-white p-3 rounded-lg cursor-pointer transition duration-200 disabled:bg-[#0071FF99] disabled:cursor-not-allowed`}>Continue</button>
                <p className="text-sm text-[#5E6368] text-center ">Or continue with</p>
                <button className="rounded-lg cursor-pointer p-3 bg-[#E0E0E0] flex justify-center items-center"><Image src='/images/google.png' alt="sign up with google" width={24} height={24}/></button>
              </form> 
            </div>

            <div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Step2