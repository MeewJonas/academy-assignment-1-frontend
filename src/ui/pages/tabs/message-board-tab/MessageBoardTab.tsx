import { useState } from 'react';
import { IonButton, IonContent } from '@ionic/react';

import PostCard from 'ui/components/custom/PostCard';
import MenuToolBar from 'ui/components/custom/MenuToolBar';

type Post = {
  id: number;
  name: string;
  date: string;
  message: string;
  likedByUser: boolean;
  highFivedByUser: boolean;
};

const MessageBoardTab: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>([
    { id: 0, name: 'Michael Jordan', date: 'Today', message: 'Test test test?', likedByUser: false, highFivedByUser: false },
    { id: 1, name: 'Charles Barkley', date: 'Today', message: 'Test test test?', likedByUser: false, highFivedByUser: false },
    { id: 2, name: 'Scottie Pippen', date: 'Today', message: 'Test test test', likedByUser: false, highFivedByUser: false },
  ]);

  return (
    <>
      <MenuToolBar title="Forum" post={true} />

      <IonContent id="message-board-content" color={'white-background'}>
        <div className="px-5 pb-40">
          {posts?.map((p, i) => {
            return <PostCard key={i} name={p.name} date={p.date} message={p.message} />;
          })}
        </div>
      </IonContent>
    </>
  );
};

export default MessageBoardTab;
