import React from 'react';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonMenuButton,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const MessageBoardTab: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color={'dark'}>
        <IonButtons slot="start" className="p-5">
          <IonMenuButton auto-hide="false" />
        </IonButtons>
        <IonTitle>Forum</IonTitle>
      </IonToolbar>
      <IonItem className="border-solid border-4">
        <IonTextarea placeholder="Skriv nyt opslag"></IonTextarea>
        <IonButton slot="end" size="default">
          Send
        </IonButton>
      </IonItem>
    </IonHeader>
    <IonContent id="message-board-content" color={'white-background'}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>John Johnson</IonCardTitle>

          <IonCardSubtitle>Today</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum
          consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.
        </IonCardContent>

        <IonButton fill="clear">Action 1</IonButton>
        <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>John Johnson</IonCardTitle>
          <IonCardSubtitle>Today</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum
          consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.
        </IonCardContent>

        <IonButton fill="clear">Action 1</IonButton>
        <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
      <IonCard className="mb-40">
        <IonCardHeader>
          <IonCardTitle>John Johnson</IonCardTitle>
          <IonCardSubtitle>Yesterday</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum
          consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.
        </IonCardContent>

        <IonButton fill="clear">Action 1</IonButton>
        <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
    </IonContent>
  </>
);

export default MessageBoardTab;
