import Image from "next/image"

function LogoPlacement() {
  return (
    <div className='p-[80px] bg-gradient-to-r from-[#4BA2FF] to-[#0071FF] rounded-[32px]'>
          <div className='bg-[#ffffff33] border border-[#f9f9f9cc] rounded-[38px] p-6'>
              <div className="bg-gradient-to-b from-[#000000] to-[#00285B] rounded-[32px] sign-in-background min-w-[30vw] min-h-[70vh] flex items-end">
                <p className="text-[#E0E0E0] text-5xl m-6">Welcome to Eazify <br /> Academy</p>
              </div>

          </div>

    </div>
  )
}

export default LogoPlacement