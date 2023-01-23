import { IonButton, IonButtons, IonHeader, IonItem, IonMenuButton, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

type MenuToolbarProps = { title: string; post: boolean };

const MenuToolBar: React.FC<MenuToolbarProps> = ({ title = '', post = false }) => {
  return (
    <IonHeader>
      <IonToolbar color={'dark'}>
        <IonButtons slot="start" className="p-5">
          <IonMenuButton auto-hide="false" />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
      {post && (
        <IonItem className="border-solid border-4" lines='none'>
          <IonTextarea  placeholder="Skriv nyt opslag"></IonTextarea>
          <IonButton className='my-auto' slot="end" size="default">
            Send
          </IonButton>
        </IonItem>
      )}
    </IonHeader>
  );
};

export default MenuToolBar;
