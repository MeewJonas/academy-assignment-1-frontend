import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabBar, IonTabButton, IonIcon, IonTabs, IonRouterOutlet, IonContent, IonPage, useIonRouter, IonLabel } from '@ionic/react';
import { personOutline, mailOutline, searchOutline, homeOutline, calendarNumberOutline } from 'ionicons/icons';

import DirectMessageTab from './tabs/direct-message-tab/DirectMessageTab';
import MessageBoardTab from './tabs/message-board-tab/MessageBoardTab';
import SearchTab from './tabs/search-tab/SearchTab';
import UserTab from './tabs/user-page-tab/UserTab';
import CalendarTab from './tabs/calendar-tab/CalendarTab';

import { useAuthUserStore } from 'store/user';
import { useProfileStore } from 'store/profile';

import { supabase } from 'apis/supabaseClient';
import MainMenu from 'ui/components/menues/MainMenu';

const HomePage: React.FC = () => {
  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const userProfile = useProfileStore((state) => state.firstName);
  const setProfile = useProfileStore((state) => state.setUserProfile);

  useEffect(() => {
    if (!authUser) router.push('/login');
  }, [router, authUser]);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: profile } = await supabase.from('profile').select('*').eq('id', authUser?.id).single();
      if (profile === null) return;

      setProfile(profile.first_name, profile.last_name, profile.age);
    };
    if (!userProfile) {
      fetchProfile();
    }
  }, []);

  useEffect(() => {
    if (userProfile === '') {
      router.push('/onboard');
    }
  }, [userProfile]);

  return (
    <>
      <MainMenu />
      <IonPage id="main-content">
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

              <IonTabBar slot="bottom" color={'dark'} class={'h-[70px] border-t-[1px] border'}>
                {pages.map((p, i) => {
                  return (
                    <IonTabButton key={i} tab={`tab${i}`} href={p.path}>
                      <IonIcon icon={p.icon} />
                      <IonLabel>{p.name}</IonLabel>
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
    name: 'calendar',
    icon: calendarNumberOutline,
    path: '/calendar',
    component: CalendarTab,
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
