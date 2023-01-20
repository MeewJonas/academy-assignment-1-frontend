import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const DirectMessageTab: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color={'dark'}>
        <IonButtons slot="start" className="p-5">
          <IonMenuButton auto-hide="false" />
        </IonButtons>
        <IonTitle>Beskeder</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent color={'white-background'}></IonContent>
  </>
);

export default DirectMessageTab;
