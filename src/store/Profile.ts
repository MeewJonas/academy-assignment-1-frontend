import create from 'zustand';
import { supabase } from 'apis/supabaseClient';
import { Database } from 'types/database.types';

type Profile = Database['public']['Tables']['profile']['Row'];

interface ProfileState {
  //userProfile: Profile | null;
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  profiles: Profile[] | null;
  //setUserProfile: (userProfile: Profile) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setAge: (age: number) => void;
  setUserProfile: (firstName: string, lastName: string, age: number) => void;
  resetUserProfile: () => void;
  getAllUserProfiles: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  firstName: null,
  lastName: null,
  age: null,
  profiles: [],
  //setUserProfile: (userProfile) => set({ userProfile  }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setAge: (age) => set({ age }),
  setUserProfile: (firstName, lastName, age) => set({ firstName, lastName, age }),
  resetUserProfile: () => set({ firstName: null, lastName: null, age: null }),
  getAllUserProfiles: async () => {
    const { data } = await supabase.from('profile').select();
    set({ profiles: data });
  },
}));
