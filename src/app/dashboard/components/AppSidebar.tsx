import { Calendar, Home, Inbox, Search, Settings,BookOpen, BookOpenText } from "lucide-react"
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
} from "@/components/ui/sidebar"


// Menu items.
const items = [
  {
    title: "All Courses",
    url: "/dashboard",
    icon: BookOpen,
  },
  {
    title: "Your Courses",
    url: "/dashboard/your-courses",
    icon: BookOpenText,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
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
    </Sidebar>
  )
}

export default AppSidebar