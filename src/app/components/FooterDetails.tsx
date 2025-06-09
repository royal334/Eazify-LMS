type PropTypes = {
     icon?: React.ReactNode
     title: string
     details:string
}

function FooterDetails(props: PropTypes) {
  return (
     <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
               <div>{props.icon}</div>
               <p className="text-sky-blue font-semibold md:text-lg">{props.title}</p>
          </div>
          <p className="text-white hover:underline">{props.details}</p>
     </div>
  )
}

export default FooterDetails