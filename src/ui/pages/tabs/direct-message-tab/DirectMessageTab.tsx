import React from 'react';
import {  IonContent } from '@ionic/react';
import MenuToolBar from 'ui/components/custom/MenuToolBar';

const DirectMessageTab: React.FC = () => (
  <>
    <MenuToolBar title="Direct Message"  />
    <IonContent color={'white-background'}></IonContent>
  </>
);

export default DirectMessageTab;
