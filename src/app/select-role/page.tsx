"use client"
import Link from 'next/link'
import RoleCard from './components/RoleCard'
import useUserRoleStore from '@/store/UserRoles'
function SelectRole() {

  const  { role, setRole } = useUserRoleStore()

  function handleRole(e:React.ChangeEvent<HTMLInputElement>){
    const selectedRole = e.target.value;
    setRole(selectedRole)
  }

  const roles = [
    {
         id: 1,
         title: 'student',

    },
    {
         id: 2,
         title: 'instructor',

    },
    {
         id: 3,
         title: 'admin',

    }]

  return (
      <div className='h-screen flex justify-center items-center'>
          <div className="bg-white rounded-lg p-4 shadow-lg w-[50%]">
              <h1 className="text-bright-blue font-bold my-4 text-3xl">Pick Role</h1>
              <p className="mt-4 mb-6 text-gray-500 text-lg">Which role do you choose</p>
              {roles.map((role) => (
                <div key={role.id}  className={`mt-4 flex gap-6 items-center border-2 rounded-lg p-4 cursor-pointer border-black  `}>
                  <input 
                      type="radio" 
                      name='role'
                      value={role.title}
                      onChange={handleRole}
                      className="appearance-none w-6 h-6 rounded border border-black outline checked:bg-bright-blue checked:bg-[url('/images/icon-checkmark.svg')] checked:bg-center checked:bg-no-repeat cursor-pointer"
                      />
                  <RoleCard
                    role={role.title}
                    disabled= {role.title === "Admin" ? true : false}
                  />

              </div>))}

              <div className="flex gap-4 justify-between mt-8">
                <div></div>
                  <Link href={`${role}-dashboard`}><button className="bg-bright-blue text-white p-2 rounded font-semibold cursor-pointer ">Continue</button></Link>
              </div>
        </div>
      </div>
  )
}

export default SelectRole