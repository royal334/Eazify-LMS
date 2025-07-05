import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';
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
        name: 'user-role-storage', // Key for sessionStorage
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  );
   
   export default useUserRoleStore;