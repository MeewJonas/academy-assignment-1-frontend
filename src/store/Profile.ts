import create from 'zustand';
import { Database } from 'types/database.types';

type Profile = Database['public']['Tables']['profile']['Row'];

interface ProfileState {
userProfile:   Profile | null;
setUserProfile: (userProfile: Profile) => void;
resetUserProfile: () => void;

}

export const useProfileStore = create<ProfileState>((set) => ({

    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    
    resetUserProfile: () => set({ userProfile: null }),

}));




