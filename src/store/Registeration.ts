import { create } from "zustand";



type RegistrationStateTypes = {
  role?: string;
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  gender?: string ;
  skilllevel?: string
  setField: (field: keyof RegistrationStateTypes, value: string) => void;
  reset: () => void;
};

 const useRegistrationStore = create<RegistrationStateTypes>((set) => ({
  role: '',
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  gender: '',
  skilllevel:'',
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  reset: () => set({ role: '', email: '', password: '', firstname: '', lastname: '', gender:'', skilllevel:''}),
}));

export default useRegistrationStore