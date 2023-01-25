import { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonTextarea } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';

import PostCard from 'ui/components/custom/PostCard';
import MenuToolBar from 'ui/components/custom/MenuToolBar';

type Post = {
  id: string;
  user: string;
  userId: string;
  date: string;
  message: string;
  likes: Array<{profile_fk: string}>;
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
      const { data } = await supabase.from('post').select('*, profile_fk(first_name, last_name), post_likes_junction(profile_fk)').order('created', { ascending: false });
      if (data === null) return;
      setPosts(
        data.map((p) => ({ id: p.id, user: p.profile_fk.first_name + ' ' + p.profile_fk.last_name, userId: p.profile_fk, date: p.created, message: p.message, likes: p.post_likes_junction }))
      );
    };

    fetchPosts();
  }, []);

  const handleSend = async () => {
    if (newPost === '') return;
    const { data } = await supabase.from('post').insert({ message: newPost, profile_fk: authUser?.id }).select('*, profile(first_name, last_name)');

    if (data === null) return;
    setPosts([
      {
        id: data[0].id,
        user: data[0].profile.first_name + ' ' + data[0].profile.last_name,
        userId: data[0].profile_fk,
        date: data[0].created,
        message: data[0].message,
        likes: data[0].likes,
      },
      ...posts,
    ]);
    setNewPost('');
  };

  const handleDelete = async (id: string) => {
    const { data } = await supabase.from('post').delete().match({ id: id });
    if (data === null) return; 
    setPosts(posts.filter((p) => p.id !== id));
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
            return <PostCard key={i} post={p} onDelete={handleDelete} />;
          })}
        </div>
      </IonContent>
    </>
  );
};

export default MessageBoardTab;
