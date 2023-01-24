import create from 'zustand';
//import { Database } from 'types/database.types';

//type Profile = Database['public']['Tables']['profile']['Row'];

interface ProfileState {
  //userProfile: Profile | null;
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  //setUserProfile: (userProfile: Profile) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setAge: (age: number) => void;
  setUserProfile: (firstName: string, lastName: string, age: number) => void;
  resetUserProfile: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  firstName: null,
  lastName: null,
  age: null,
  //setUserProfile: (userProfile) => set({ userProfile  }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setAge: (age) => set({ age }),
  setUserProfile: (firstName, lastName, age) => set({ firstName, lastName, age }),
  resetUserProfile: () => set({ firstName: null, lastName: null, age: null }),
}));
