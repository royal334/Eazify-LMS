type RoleCardTypes = {
     role: string
     icon?: string
     disabled: boolean
}

function RoleCard(props:RoleCardTypes) {
     return (

         <>
           <div className={`text-3xl mb-2 ${props.disabled ? 'text-gray-400':'text-black'}`}>{props.icon}</div>
           <h3 className="text-xl font-semibold text-black">{props.role}</h3>
         </>
       
     );
   }

export default RoleCard