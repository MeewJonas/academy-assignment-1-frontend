import { useState } from 'react';
import { IonButton, useIonRouter, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonModal, IonTitle, IonToolbar } from '@ionic/react';

import { useAuthUserStore } from 'store/user';
import { useProfileStore } from 'store/profile';
import { supabase } from 'apis/supabaseClient';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useIonRouter();

  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);
  const resetProfile = useProfileStore((state) => state.resetUserProfile);

  const handleLogOut = async () => {
    resetAuthUser();
    resetProfile();
    await supabase.auth.signOut();
    router.push('/login');
  };
  return (
    <>
      <IonMenu contentId="message-board-content">
        <IonHeader>
          <IonToolbar color={'dark'}>
            <div className="p-9">
              <IonTitle>Menu Content</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {menuItems.map((p, i) => {
              return (
                <IonItem key={i} routerLink={p.path}>
                  <IonLabel>{p.name}</IonLabel>
                </IonItem>
              );
            })}
            <IonItem onClick={() => setIsOpen(true)}>
              <IonLabel>Modular Test</IonLabel>
            </IonItem>
            <IonItem onClick={handleLogOut}>
              <IonLabel>Log ud</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum
            consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.
          </p>
        </IonContent>
      </IonModal>
    </>
  );
};

export default MainMenu;

const menuItems = [
  { name: 'Settings', path: '/' },
  { name: 'Account', path: '/' },
  { name: 'Questionnaire', path: '/' },
  { name: 'User', path: '/user' },
  { name: 'Search', path: '/search' },
];
