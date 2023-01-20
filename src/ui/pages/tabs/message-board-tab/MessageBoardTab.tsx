import React from 'react';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import MainMenu from 'ui/components/menues/MainMenu';

const MessageBoardTab: React.FC = () => (
  <>
  <MainMenu />
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton auto-hide="false" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent id='message-board-content' className="ion-padding" color={'white-background'}>
      <IonItem>
        <IonLabel position="floating"></IonLabel>
        <IonInput type="text" placeholder=""></IonInput>
        <IonButton slot="end" size="default">
          Send
        </IonButton>
      </IonItem>
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
      <IonCard>
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
