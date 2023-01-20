import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';

type profileType = {
  id: string;
  first_name: string;
  last_name: string;
  age: number;
  subscription_active: boolean;
};

const UserTab: React.FC = () => {
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
    <>
      <IonToolbar color={'dark'}>
        <IonButtons slot="start" className="p-5">
          <IonMenuButton auto-hide="false" />
        </IonButtons>
        <IonTitle>Profil</IonTitle>
      </IonToolbar>
      <IonContent color={'white-background'}>
        <IonGrid>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput type="text" value={profileData?.first_name} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput type="text" value={profileData?.last_name} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="text" value={authUser?.email} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Age</IonLabel>
              <IonInput type="number" min={18} max={120} value={profileData?.age} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton>Gem</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default UserTab;
