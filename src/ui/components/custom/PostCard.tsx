import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { useState, useEffect } from 'react';
import { heartOutline, handRightOutline, chatboxEllipsesOutline, closeOutline } from 'ionicons/icons';
import { heart, handRight } from 'ionicons/icons';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';

type PostCardProps = {
  post: {
    id: string;
    user: string;
    userId: string;
    date: string;
    message: string;
    likes: Array<{ profile_fk: string }>;
  };
  onDelete: (id: string) => void;
};

const PostCard: React.FC<PostCardProps> = ({ post: { id, user, userId, date, message, likes }, onDelete }) => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const [like, setLike] = useState(false);
  const [highFive, setHighFive] = useState(false);

  useEffect(() => {
    const checkLike = async () => {
      if (likes === null || authUser === null) return;
      likes.forEach((like) => {
        if (like.profile_fk === authUser?.id) {
          setLike(true);
          return;
        }
      });
    };
    checkLike();
  }, []);

  const handleLike = async () => {
    if (!like) {
      await supabase.from('post_likes_junction').insert([{ post_fk: id, profile_fk: authUser?.id }]);
      setLike(!like);
    } else {
      await supabase.from('post_likes_junction').delete().match({ post_fk: id, profile_fk: authUser?.id });
      setLike(!like);
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{user}</IonCardTitle>

        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{message}</IonCardContent>

      <IonButton onClick={handleLike} fill="clear">
        {!like ? <IonIcon icon={heartOutline} /> : <IonIcon className="fill-red-900" icon={heart} />}
      </IonButton>
      <IonButton onClick={() => setHighFive(!highFive)} fill="clear">
        {!highFive ? <IonIcon icon={handRightOutline} /> : <IonIcon className="fill-blue-900" icon={handRight} />}
      </IonButton>
      <IonButton fill="clear">
        <IonIcon icon={chatboxEllipsesOutline} />
      </IonButton>
      {authUser?.id === userId && (
        <IonButton onClick={() => onDelete(id)} fill="clear">
          <IonIcon icon={closeOutline} />
        </IonButton>
      )}
    </IonCard>
  );
};

export default PostCard;
