import { Toggle } from "../ui/toggle"
import { Moon,Sun } from "lucide-react"
import useDarkModeStore from "@/store/DarkMode"

function DarModeToggle() {

     const { isDarkMode, toggleDarkMode } = useDarkModeStore()

  return (
    <Toggle className="cursor-pointer" onClick={toggleDarkMode} size="sm">
          {isDarkMode? <Sun/> : <Moon />}
    </Toggle>
  )
}

export default DarModeToggle