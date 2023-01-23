import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import MenuToolBar from 'ui/components/custom/MenuToolBar';

const DirectMessageTab: React.FC = () => (
  <>
    <MenuToolBar title="Direct Message" post={false} />
    <IonContent color={'white-background'}></IonContent>
  </>
);

export default DirectMessageTab;
