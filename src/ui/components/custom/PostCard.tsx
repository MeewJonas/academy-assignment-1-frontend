import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { heartOutline, handRightOutline, chatboxEllipsesOutline, closeOutline } from 'ionicons/icons';
import { heart, handRight } from 'ionicons/icons';
import { useAuthUserStore } from 'store/user';

type PostCardProps = {
  post: {
    id: string;
    user: string;
    userId: string;
    date: string;
    message: string;
  };
  onDelete: (id: string) => void;
};

const PostCard: React.FC<PostCardProps> = ({ post: { id, user, userId, date, message }, onDelete }) => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const [like, setLike] = useState(false);
  const [highFive, setHighFive] = useState(false);


  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{user}</IonCardTitle>

        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{message}</IonCardContent>

      <IonButton onClick={() => setLike(!like)} fill="clear">
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
