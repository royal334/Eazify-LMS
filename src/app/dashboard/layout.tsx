import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./components/AppSidebar"
import { Inter } from "next/font/google";

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
          <div className="bg-white dark:bg-black py-2">
            <SidebarTrigger  />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}