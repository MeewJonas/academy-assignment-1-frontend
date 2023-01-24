import { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonTextarea } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';

import PostCard from 'ui/components/custom/PostCard';
import MenuToolBar from 'ui/components/custom/MenuToolBar';

type Post = {
  id: string;
  user: string;
  date: string;
  message: string;
  //likedByUser: boolean;
  //highFivedByUser: boolean;
};

const MessageBoardTab: React.FC = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const [newPost, setNewPost] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      //TODO - add range to select like this:   .range(0,9)
      const { data } = await supabase.from('post').select('*, profile(first_name, last_name)').order('created', { ascending: false });
      if (data === null) return;
      setPosts(data.map((p) => ({ id: p.id, user: p.profile.first_name + ' ' + p.profile.last_name, date: p.created, message: p.message })));
    };

    fetchPosts();
  }, []);

  const handleSend = async () => {
    if (newPost === '') return;
    const { data } = await supabase.from('post').insert({ message: newPost, profile_fk: authUser?.id }).select('*, profile(first_name, last_name)');
    //const { data } = await supabase.from('post').select('*').eq('id', authUser?.id).single();

    if (data === null) return;
    setPosts([
      { id: data[0].id, user: data[0].profile.first_name + ' ' + data[0].profile.last_name, date: data[0].created, message: data[0].message },
      ...posts,
    ]);
    setNewPost('');
  };

  return (
    <>
      <MenuToolBar title="Forum" />
      <IonHeader>
        <IonItem className="border-solid border-4" lines="none">
          <IonTextarea onIonChange={(e: any) => setNewPost(e.detail.value)} placeholder="Skriv nyt opslag" value={newPost}></IonTextarea>
          <IonButton onClick={handleSend} className="my-auto" slot="end" size="default">
            Send
          </IonButton>
        </IonItem>
      </IonHeader>

      <IonContent id="message-board-content" color={'white-background'}>
        <div className="px-5 pb-40">
          {posts?.map((p, i) => {
            return <PostCard key={i} name={p.user} date={p.date} message={p.message} />;
          })}
        </div>
      </IonContent>
    </>
  );
};

export default MessageBoardTab;
