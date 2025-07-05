import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div>
     <Image src='/images/logo-1.png' alt='logo' width={200} height={200} className='m-5'/>
      <div className='flex flex-col items-center justify-center h-[70vh] text-center'>
          <p className='not-found text-2xl'>Page does not exist</p>
          <button className='bg-bright-blue text-white px-4 py-2 rounded-md mt-4 hover:bg-sky-blue transition-colors duration-300'>
               <Link href="/">Return Home</Link>
          </button>
      </div>
    </div>
  )
}