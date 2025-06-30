import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./components/AppSidebar"
import { Inter } from "next/font/google";
import { Bell } from 'lucide-react';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      
      <div className={`${inter.variable} flex w-full bg-[#0073ff80]`}>
        <AppSidebar />
        <main className=" w-full ">
          <div className="bg-white dark:bg-black py-2 flex justify-between ">
            <SidebarTrigger  />
            {/* <div className="mr-2 flex gap-4 items-center">
              <SignedIn>
              <Bell/>
                <UserButton/>
              </SignedIn>
            </div> */}
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}