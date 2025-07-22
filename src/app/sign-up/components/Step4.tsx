"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useRegistrationStore from "@/store/Registeration";
import ToggleSkill from "./ToogleSkill";
import { useRegister } from "@/hooks/register";
import { Label } from "@/components/ui/label";


type FormDataTypes={
  skilllevel: string
}
function Step4() {

  const { handleSubmit, formState,setValue,watch } = useForm<FormDataTypes>(
    {
      mode: 'onBlur',
      defaultValues: {
        skilllevel:""
      },
    }
  );

  const { errors, isValid, isSubmitting } = formState;


  const { role, email, password, firstname, lastname,setField } = useRegistrationStore();
  const name = firstname + '' + lastname
  const { mutate, isError, error,isPending } = useRegister();
  const hash = password
  const router = useRouter()

function handleFinalSubmit(data:FormDataTypes) {
  setField('skilllevel', data.skilllevel)
  mutate({
    role,
    email,
    hash,
    name,
  },
  {
    onSuccess: () => {
      router.push("/sign-in")
      localStorage.removeItem('user-role-storage');
    }
  }
);

}

        const styles={
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
         // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center h-screen p-11 ">
        <div className="step2 w-full rounded-4xl p-[40px] mx-auto">
          <div className="p-10  rounded-[38px]" style={styles}>
            <div className="bg-white w-full h-full p-10 rounded-[16px]">
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-300"></span>
                <span className="h-2 w-6 rounded-full bg-blue-600"></span>
              </div>
              <h1 className="text-charcoal-black text-5xl font-bold text-center ">Set up your account</h1>
              <p className="text-[#3F3F3F] mt-2 mb-4 text-center">Your are one step to achieving your dream</p>
              <div className="mx-auto w-1/2 mt-14">
                <form onSubmit={handleSubmit(handleFinalSubmit)} className="flex flex-col gap-4 ">
                  <div>
                    <Label htmlFor="skilllevel" className="text-sm font-semibold inter">Skill Level</Label>
                    <Select
                      value={watch('skilllevel')}
                      onValueChange={val => setValue('skilllevel', val)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Skill Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermidiate">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.skilllevel && <span className="text-red-500 text-sm">{errors.skilllevel.message}</span>}
                  </div>

                  <div>
                    <Label htmlFor="skill" className="text-sm font-semibold inter">Learning Intrest</Label>
                    <ToggleSkill/>
                  </div>
                  {isError && <span className="text-red-500 text-sm">{error?.message === "Credentials taken" ? "This email is already registered. Please use a different email.": "An error occurred. Please try again."}</span>}
                  <button type="submit" disabled={!isValid || isSubmitting || isPending} className={`bg-[#0071FF] text-white p-3 rounded-lg cursor-pointer transition duration-200 disabled:bg-[#0071FF99] disabled:cursor-not-allowed`}>{isPending? "Submitting form":"Continue"}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col md:hidden min-h-screen items-center">
        <div className="w-full pb-6">
          <div className="w-full bg-gradient-to-b from-[#4BA2FF] to-[#0071FF] px-4 pt-10 pb-8">
            <div className="border rounded-[18px] p-4 border-gray-50/80" style={styles}>
              <div className="bg-gradient-to-b from-[#000000] to-[#00285B] rounded-[15px] step2 min-h-[40vh] flex flex-col justify-end pl-4">
              <h1 className="text-white text-2xl font-bold ">Set up your account</h1>
              <p className="text-white mt-2 mb-4 text-sm">Your are one step to achieving your dream</p>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-full p-4 mt-4">
            <form onSubmit={handleSubmit(handleFinalSubmit)} className="flex flex-col gap-4 ">
              <div>
                <Label htmlFor="skilllevel" className="text-sm font-semibold inter">Skill Level</Label>
                <Select
                  value={watch('skilllevel')}
                  onValueChange={val => setValue('skilllevel', val)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Skill Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermidiate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                {errors.skilllevel && <span className="text-red-500 text-sm">{errors.skilllevel.message}</span>}
              </div>
              <div>
                <Label htmlFor="skill" className="text-sm font-semibold inter">Learning Intrest</Label>
                <ToggleSkill/>
              </div>
              {isError && <span className="text-red-500 text-sm">{error?.message === "Credentials taken" ? "This email is already registered. Please use a different email.": "An error occurred. Please try again."}</span>}
              <button type="submit" disabled={!isValid || isSubmitting || isPending} className={`bg-[#0071FF] text-white p-3 rounded-lg cursor-pointer transition duration-200 disabled:bg-[#0071FF99] disabled:cursor-not-allowed`}>{isPending? "Submitting form":"Continue"}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step4