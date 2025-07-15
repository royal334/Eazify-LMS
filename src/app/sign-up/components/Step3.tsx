"use client"
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useRegistrationStore from "@/store/Registeration";
import { useRouter } from "next/navigation";

type FormDataTypes={
     firstname:string
     lastname:string
     gender: string
}
function Step3() {

  const { register, handleSubmit, formState,setValue,watch } = useForm<FormDataTypes>(
    {
      mode: 'onBlur',
      defaultValues: {
        firstname: "",
        lastname:"",
      },
    }
  );

  const { errors, isValid } = formState;
  const { setField } = useRegistrationStore()
  const router = useRouter()

  function OnSubmit(data:FormDataTypes){
    setField('firstname', data.firstname)
    setField('lastname', data.lastname)
    router.push('/sign-up/step4')
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
               <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="h-2 w-6 rounded-full bg-blue-600"></span>
                    <span className="h-2 w-2 rounded-full bg-blue-300"></span>
               </div>

            <h1 className="text-charcoal-black text-5xl font-bold text-center ">Set up your account</h1>
            <p className="text-[#3F3F3F] mt-2 mb-4 text-center">Your are one step to achieving your dream</p>
            <div className="mx-auto w-1/2 mt-14">
              <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="firstname" className="text-sm font-semibold">First Name</Label>
                  <input
                    type="firstname"
                    id="firstname"
                    placeholder="John"
                    {...register("firstname", { required: "First name is required" })}
                    className={`p-2 border rounded-xl ${errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname.message}</span>}
                </div>

                  <div className="flex flex-col gap-1">
                  <Label htmlFor="lastname" className="text-sm font-semibold">Last Name</Label>
                  <input
                    type="lastname"
                    id="lastname"
                    placeholder="Doe"
                    {...register("lastname", { required: "Last name is required" })}
                    className={`p-2 border rounded-xl ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname.message}</span>}
                </div>

               <Select
                value={watch('gender')}
                onValueChange={val => setValue('gender', val)}
               >
                    <SelectTrigger className="w-full">
                         <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                         <SelectItem value="male">Male</SelectItem>
                         <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
               </Select>
               {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}

                <button type="submit" disabled={!isValid} className={`bg-[#0071FF] text-white p-3 rounded-lg cursor-pointer transition duration-200 disabled:bg-[#0071FF99] disabled:cursor-not-allowed`}>Continue</button>
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

export default Step3