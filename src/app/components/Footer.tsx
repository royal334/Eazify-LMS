import { Phone, Mail, MapPin, Link } from "lucide-react"
import FooterDetails from "./FooterDetails"

function Footer() {
  return (
     <section id='footer' className="p-4 md:px-0">
          <div className='container px-4 md:px-8 py-10 mx-auto bg-black rounded-2xl '>
               <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-3/4">
                         <img src="/images/logo-2.png" alt="logo" className="md:w-3/4" />
                    </div>
                    <div className="grid grid-cols-2 text-white md:w-1/4 w-full justify-items-end md:justify-items-center gap-2 md:gap-0">
                    
                         <a href="/"  target='_blank' className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue">Home</a>
                         <a href="https://www.linkedin.com/company/106349919/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzqdsNmZ0QeG2CSEVnx5BGw%3D%3D" target="_blank" className="font-semibold hover:text-bright-blue">LinkedIn</a>
                         <a href="https://www.facebook.com/share/15MK5rNHMg/"  target='_blank' className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue">Facebook</a>
                         <a href="https://x.com/eazifytech?t=2q9jIy-RSl8ncnFkihrYnw&s=09"  target='_blank' className="font-semibold hover:text-bright-blue">X</a>
                         <a href="https://www.instagram.com/eazifyinnovations?igsh=cm52Ynd3bXdxN3Qy"   target='_blank' className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue">Instagram</a>
                         <a href="https://vm.tiktok.com/ZMSecUcWp/" target='_blank'  className="font-semibold hover:text-bright-blue">Tiktok</a>

                    </div>
               </div>

               <div className="my-10 border-t-2 border-b-2 py-6 border-gray-400 grid grid-cols-1 md:grid-cols-2 gap-8">

                         <a href="https://eazifyinnovations.com">
                              <FooterDetails title="WEBSITE" details="eazifyinnovations.com" icon={<Link size={28} strokeWidth={1.75} color="#0071FF" />} />
                         </a>

                    <FooterDetails title="PHONE" details="+2347049728416" icon={<Phone size={22} strokeWidth={1.75}  color="#0071FF"/>} />
                    <FooterDetails title="EMAIL" details="hello@eazifyinnovations.com" icon={<Mail size={28} strokeWidth={1.75} color="#0071FF"/>} />
                    <FooterDetails title="ADDRESS" details="Awka South, Anambra State, Nigeria" icon={<MapPin size={28} strokeWidth={1.75}  color="#0071FF"/>} />

               </div>

          </div>
     </section>
  )
}

export default Footer