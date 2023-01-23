import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { heartOutline, handRightOutline, chatboxEllipsesOutline } from 'ionicons/icons';
import { heart, handRight, chatboxEllipses } from 'ionicons/icons';

type PostCardProps = {
  name: string;
  date: string;
  message: string;
};

const PostCard: React.FC<PostCardProps> = ({
  name = 'Blank',
  date = 'today',
  message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.',
}) => {
  const [like, setLike] = useState(false);
  const [highFive, setHighFive] = useState(false);
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>

        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{message}</IonCardContent>

      <IonButton onClick={()=> setLike(!like)} fill="clear">{!like ? <IonIcon icon={heartOutline} /> : <IonIcon className="fill-red-900" icon={heart} />}</IonButton>
      <IonButton onClick={()=> setHighFive(!highFive)} fill="clear">{!highFive ? <IonIcon icon={handRightOutline} /> : <IonIcon className="fill-blue-900" icon={handRight} />}</IonButton>
      <IonButton fill="clear">
        <IonIcon icon={chatboxEllipsesOutline} />
      </IonButton>
    </IonCard>
  );
};

export default PostCard;
