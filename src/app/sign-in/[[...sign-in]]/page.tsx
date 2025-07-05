// import { cookies } from "next/headers";
import SignInForm from "./SignInForm";
//import { redirect } from "next/navigation";



function Page() {

  // const token = cookies().get('token')?.value
  // if (token){
  //   redirect('/dashboard')
  // }

  return (
    <SignInForm/>
  )
}

export default Page