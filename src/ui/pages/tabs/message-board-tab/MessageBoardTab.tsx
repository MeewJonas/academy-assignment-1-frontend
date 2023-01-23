import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonTextarea,

} from '@ionic/react';

import PostCard from 'ui/components/custom/PostCard';
import MenuToolBar from 'ui/components/custom/MenuToolBar';

const MessageBoardTab: React.FC = () => (
  <>
    
      <MenuToolBar title="Forum" post={true} />
      
    
    <IonContent id="message-board-content" color={'white-background'}>
      <div className="px-5 pb-40">
        <PostCard
          name="Michael Jordan"
          date="Today"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis error fugit, reprehenderit tempora sed nisi consequatur laborum asperiores, natus facere quod quas veniam cupiditate non dicta illo, quos quidem?"
        />
        <PostCard
          name="Charles Barkley"
          date="Today"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic veniam obcaecati libero quod nulla architecto reprehenderit facere officiis tenetur vitae tempora consectetur fugiat atque nam, voluptatum quaerat natus aspernatur. Labore quibusdam sapiente in dolor libero quaerat, sint repudiandae vel!"
        />
        <PostCard
          name="Scottie Pippen"
          date="Today"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus tenetur voluptas debitis."
        />
      </div>
    </IonContent>
  </>
);

export default MessageBoardTab;
