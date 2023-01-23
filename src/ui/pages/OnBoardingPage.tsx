import { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, useIonRouter } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { useProfileStore } from 'store/Profile';

import { supabase } from 'apis/supabaseClient';

const OnBoardingPage: React.FC = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const setProfile = useProfileStore((state) => state.setUserProfile);
  const profile = useProfileStore((state) => state.userProfile);

  const router = useIonRouter();

  const [firstName, setFirstName] = useState(profile?.first_name);
  const [lastName, setLastName] = useState(profile?.last_name);
  const [age, setAge] = useState(profile?.age);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

   
    /*
    const { data, error } = await supabase.from('profile').update([{ first_name: "firstName", last_name: "lastName", age: 10 }]).eq('id', authUser?.id).select();
    
    if (error) {
      console.log(error);
    }

    if (data) {
      router.push('/home');
    }
    */
    console.log(firstName, lastName, age);
  };

  return (
    <IonPage>
      <IonContent color={'white-background'}>
        <IonGrid>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput onIonChange={(e: any) => setFirstName(e.detail.value!)} type="text" value={firstName} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput onIonChange={(e: any) => setLastName(e.detail.value!)} type="text" value={lastName} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput readonly={true} type="text" value={authUser?.email} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Age</IonLabel>
              <IonInput onIonChange={(e: any) => setAge(e.detail.value!)} type="number" min={18} max={120} value={age} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={handleSubmit}>Gem</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default OnBoardingPage;
