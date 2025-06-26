"use client"
import { useRouter, usePathname  } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import useUserRoleStore from "@/store/UserRoles";
import useEnrolledCourseStore from "@/store/Courses";

function CheckLogin() {
     const router = useRouter();
     const pathname = usePathname()
     const { isSignedIn } = useAuth();
     const { role, setRole } = useUserRoleStore()
     const { setEnrolledCourses} = useEnrolledCourseStore()
   
     useEffect(() => {
       if (isSignedIn && !role  && pathname !== "/select-role") {
         router.push("/select-role");
       }

       if (!isSignedIn) {
          // Reset role to default and clear session storage when logged out
          setEnrolledCourses([])
          setRole(null)
          sessionStorage.removeItem("user-role-storage")
          sessionStorage.removeItem("enrolled-courses-storage")
        }
     }, [isSignedIn, router, pathname, role, setEnrolledCourses,]);
  return null
}

export default CheckLogin