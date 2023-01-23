import { IonPage, IonContent, useIonAlert, useIonRouter } from '@ionic/react';
import IntroComponent from 'ui/components/ui-library/intro-component/IntroComponent';

const IntroPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={'white'}>
        <IntroComponent />
      </IonContent>
    </IonPage>
  );
};

export default IntroPage;
