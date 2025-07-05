import { LayoutDashboard, Settings,BookOpen, BookOpenText,LogOut } from "lucide-react"
import Image from "next/image"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
    title: "Dashoard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "All Courses",
    url: "/instructor-dashboard",
    icon: BookOpen,
  },
  {
    title: "My Courses",
    url: "/instructor-dashboard/my-courses",
    icon: BookOpenText,
  },
  {
    title: "Settings",
    url: "/instructor-dashboard/settings",
    icon: Settings,
  },
]

function AppSidebar() {
  return (
    <Sidebar className="h-screen z-50">
      <SidebarContent className="bg-bright-blue text-white p-2 ">
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-2xl mt-4 mb-6"><Image src='/images/logo-2.png' width={180} height={150} alt='logo'/></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-6 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild className="text-lg">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-bright-blue">
            <button className="w-full border-2 border-white text-white py-2 rounded-md hover:bg-sky-blue cursor-pointer flex items-center justify-center">
              LOG OUT<LogOut className="ml-2"/>
            </button>

      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar