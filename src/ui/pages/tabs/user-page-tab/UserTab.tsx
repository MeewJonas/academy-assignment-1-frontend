import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow, useIonRouter } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { useProfileStore } from 'store/profile';
import { supabase } from 'apis/supabaseClient';

import MenuToolBar from 'ui/components/custom/MenuToolBar';

const UserTab: React.FC = () => {
  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const firstName = useProfileStore((state) => state.firstName);
  const lastName = useProfileStore((state) => state.lastName);
  const age = useProfileStore((state) => state.age);
  const setFirstName = useProfileStore((state) => state.setFirstName);
  const setLastName = useProfileStore((state) => state.setLastName);
  const setAge = useProfileStore((state) => state.setAge);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (firstName === undefined || firstName === null) return;
    if (lastName === undefined || lastName === null) return;
    if (age === undefined || age === null) return;

    const { data } = await supabase.from('profile').update({ first_name: firstName, last_name: lastName, age: age }).eq('id', authUser?.id).select();

    if (data) {
      router.push('/home');
    }
  };

  return (
    <>
      <MenuToolBar title="User" />
      <IonContent color={'white-background'}>
        <IonGrid>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput type="text" value={firstName} onIonChange={(e: any) => setFirstName(e.detail.value)} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem color={'white-background'}>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput type="text" value={lastName} onIonChange={(e: any) => setLastName(e.detail.value)} />
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
              <IonInput type="number" min={18} max={120} value={age} onIonChange={(e: any) => setAge(e.detail.value)} />
            </IonItem>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={handleSubmit}>Gem</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default UserTab;
