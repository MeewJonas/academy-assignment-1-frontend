import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';

type profileType = {
  id: string,
  first_name: string,
  last_name: string,
   age: number, subscription_active: boolean,
}

const Tab2: React.FC = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const [profileData, setProfileData] = useState<profileType | null>(null);

  
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: profile, error } = await supabase.from('profile').select('*').eq('id', authUser?.id).single();

      setProfileData(profile);
    };
    fetchProfile();
  }, []);




  return (
    <IonContent color={'white-background'}>
      <IonGrid>
        <IonRow>
          <IonText>User:</IonText>
        </IonRow>
        <IonRow>
          <IonText>{authUser?.email}</IonText>
        </IonRow>
        <IonRow>
          <IonText>All profiles:</IonText>
        </IonRow>
        <IonRow>
          <IonButton onClick={() => console.log(profileData)}>Get Profiles</IonButton>
        </IonRow>
        <IonRow>
          <h1>{profileData?.first_name}</h1>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Tab2;
