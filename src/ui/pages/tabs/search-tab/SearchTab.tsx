import { useEffect } from 'react';
import { IonContent, IonHeader, IonSearchbar, IonToolbar } from '@ionic/react';
import { useProfileStore } from 'store/profile';
const SearchTab: React.FC = () => {
  const { profiles, getAllUserProfiles } = useProfileStore((state) => state);

  const fetchProfiles = async () => {
    getAllUserProfiles();
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar color={'dark'}>
          <IonSearchbar className="mt-5" placeholder="Søg"></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent color={'white-background'}>
        <div className="px-5 pb-40">
          {profiles?.map((p) => (
            <div key={p.id}>
              <p>
                {p.first_name} {p.last_name}
              </p>
            </div>
          ))}
        </div>
      </IonContent>
    </>
  );
};

export default SearchTab;
