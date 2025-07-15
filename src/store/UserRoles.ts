import { create } from 'zustand'
import { persist } from 'zustand/middleware';
type UserRoleState = {
     role: string | null; // Define roles
     setRole: (role: string | null) => void; // Function to set role
   };
   
   const useUserRoleStore = create(
    persist<UserRoleState>(
      (set) => ({
        role: null, // Default role
        setRole: (role) => set({ role }),
      }),
      {
        name: 'user-role-storage', 
      }
    )
  );
   
   export default useUserRoleStore;