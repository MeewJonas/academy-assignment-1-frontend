import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

type MenuToolbarProps = { title: string };

const MenuToolBar: React.FC<MenuToolbarProps> = ({ title = '' }) => {
  return (
    <IonHeader>
      <IonToolbar color={'dark'}>
        <IonButtons slot="start" className="p-5">
          <IonMenuButton auto-hide="false" />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default MenuToolBar;
