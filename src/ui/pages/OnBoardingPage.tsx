import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, useIonRouter } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { useProfileStore } from 'store/profile';

import { supabase } from 'apis/supabaseClient';

const OnBoardingPage: React.FC = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const firstName = useProfileStore((state) => state.firstName);
  const lastName = useProfileStore((state) => state.lastName);
  const age = useProfileStore((state) => state.age);
  const setFirstName = useProfileStore((state) => state.setFirstName);
  const setLastName = useProfileStore((state) => state.setLastName);
  const setAge = useProfileStore((state) => state.setAge);

  const router = useIonRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (firstName === undefined || firstName === null) return;
    if (lastName === undefined || lastName === null) return;
    if (age === undefined || age === null) return;
    
    const { data, error } = await supabase.from('profile').update({ first_name: firstName, last_name: lastName, age: age }).eq('id', authUser?.id).select();
    
    if (error) {
      console.log(error);
    }

    if (data) {
      router.push('/home');
    }
  };

  return (
    <IonPage>
      <IonContent color={'white-background'}>
        <IonGrid>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput onIonChange={(e: any) => setFirstName(e.detail.value)} type="text" value={firstName} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput onIonChange={(e: any) => setLastName(e.detail.value)} type="text" value={lastName} />
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
              <IonInput onIonChange={(e: any) => setAge(e.detail.value)} type="number" min={18} max={120} value={age} />
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
