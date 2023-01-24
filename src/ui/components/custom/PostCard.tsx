import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { heartOutline, handRightOutline, chatboxEllipsesOutline } from 'ionicons/icons';
import { heart, handRight } from 'ionicons/icons';


type PostCardProps = {
  name: string;
  date: string;
  message: string;
};

const PostCard: React.FC<PostCardProps> = ({
  name = 'John Doe',
  date = '2023-01-01',
  message = 'Bla Bla',
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
