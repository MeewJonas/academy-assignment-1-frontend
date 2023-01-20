import React from 'react';
import { IonContent, IonGrid, IonHeader, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

const SearchTab: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color={'dark'}>
        <IonSearchbar className="mt-5" placeholder="Søg"></IonSearchbar>
      </IonToolbar>
    </IonHeader>

    <IonContent color={'white-background'}>
      <IonTitle>Search</IonTitle>
    </IonContent>
  </>
);

export default SearchTab;
