import React from 'react';
import { IonContent, IonSearchbar, IonTitle } from '@ionic/react';

const SearchTab: React.FC = () => (
  <IonContent color={'white-background'}>
    <IonTitle>Search</IonTitle>
    <IonSearchbar placeholder="Søg"></IonSearchbar>
  </IonContent>
);

export default SearchTab;
