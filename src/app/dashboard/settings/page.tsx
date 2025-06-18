'use client'
import { Switch } from '@/components/ui/switch';
import { useEffect } from 'react'
import useDarkModeStore from '@/store/DarkMode';

function page() {

     const { isDarkMode,toggleDarkMode } = useDarkModeStore()  

     // Apply or remove the dark class on the html element


  return (
    <div>
     <div>
          <h1 className='text-2xl font-bold mb-4'>Settings</h1>
          <div className='bg-white p-6 rounded-lg shadow-md'>
               <h2 className='text-xl font-semibold mb-4 dark:text-charcoal-black'>Account Settings</h2>
               <div className='flex items-center justify-between mb-4'>
                    <span className='text-gray-700'>Enable Notifications</span>
                    <Switch />
               </div>
               <div className='flex items-center justify-between mb-4'>
                    <span className='text-gray-700'>Dark Mode</span>
                    <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} className='data-[state=checked]:bg-bright-blue data-[state=unchecked]:bg-sky-blue cursor-pointer' />
               </div>
          </div>
     </div>
    </div>
  )
}

export default page