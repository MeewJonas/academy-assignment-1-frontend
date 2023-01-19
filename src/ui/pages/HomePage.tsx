import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonRouterOutlet,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  useIonRouter,
  IonList,
  IonLabel,
  IonModal,
} from '@ionic/react';
import { personOutline, mailOutline, searchOutline, homeOutline } from 'ionicons/icons';

import Tab1 from './tabs/tab-1/Tab1';
import Tab2 from './tabs/tab-2/Tab2';
import Tab3 from './tabs/tab-3/Tab3';
import Tab4 from './tabs/tab-4/Tab4';
import DirectMessageTab from './tabs/direct-message-tab/DirectMessageTab';
import MessageBoardTab from './tabs/message-board-tab/MessageBoardTab';
import SearchTab from './tabs/search-tab/SearchTab';
import UserTab from './tabs/user-page-tab/UserTab';

import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';

const HomePage: React.FC = () => {
  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!authUser) router.push('/login');
  }, [router, authUser]);

  const handleLogOut = async () => {
    resetAuthUser();
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {menuItems.map((p, i) => {
              return (
                <IonItem key={i} href={p.path}>
                  <IonLabel>{p.name}</IonLabel>
                </IonItem>
              );
            })}
            <IonItem onClick={() => setIsOpen(true)}>
              <IonLabel>Modular Test</IonLabel>
            </IonItem>
            <IonItem onClick={handleLogOut}>
              <IonLabel>Log ud</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      {/*TODO START: Move it to its own class*/}
      <IonModal isOpen={isOpen} >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
      {/*TODO SLUT: Move it to its own class*/}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton auto-hide="false" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                {pages.map((p, i) => {
                  return <Route key={i} exact path={p.path} component={p.component} />;
                })}

                <Route exact path="/home">
                  <Redirect to={pages.filter((p) => p.redirect)[0].path} />
                </Route>
              </IonRouterOutlet>

              <IonTabBar slot="bottom" color={'white-background'} class={'h-[70px] border-t-[1px] border'}>
                {pages.map((p, i) => {
                  return (
                    <IonTabButton key={i} tab={`tab${i}`} href={p.path}>
                      <IonIcon icon={p.icon} />
                    </IonTabButton>
                  );
                })}
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomePage;
// home, search, my page, messages, messageBoard
const pages = [
  {
    name: 'home',
    icon: homeOutline,
    path: '/board',
    component: MessageBoardTab,
    redirect: true,
  },
  {
    name: 'message',
    icon: mailOutline,
    path: '/message',
    component: DirectMessageTab,
    redirect: false,
  },
  {
    name: 'search',
    icon: searchOutline,
    path: '/search',
    component: SearchTab,
    redirect: false,
  },
  {
    name: 'user',
    icon: personOutline,
    path: '/user',
    component: UserTab,
    redirect: false,
  },
];

const menuItems = [
  { name: 'Settings', path: '/' },
  { name: 'Account', path: '/' },
  { name: 'Questionnaire', path: '/' },
];
