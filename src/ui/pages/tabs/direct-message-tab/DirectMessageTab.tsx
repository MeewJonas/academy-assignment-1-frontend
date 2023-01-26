import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonTextarea } from '@ionic/react';
import MenuToolBar from 'ui/components/custom/MenuToolBar';
import { supabase } from 'apis/supabaseClient';

const DirectMessageTab: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([{ sender: 'The Edge', message: 'What is your name?' }]);

  const handleSend = async () => {
    if (message === null) return;
    const { data } = await supabase.functions.invoke('test', {
      body: {
        name: message,
      },
    });

    if (data === null) return;
    setMessages([...messages, { sender: 'Me', message: message }, { sender: 'The Edge', message: data.message }]);
   
  };
  return (
    <>
      <MenuToolBar title="Direct Message" />
      <IonHeader>
        <IonItem className="border-solid border-4" lines="none">
          <IonTextarea onIonChange={(e: any) => setMessage(e.detail.value)} value={message} placeholder="Say something"></IonTextarea>
          <IonButton onClick={handleSend} className="my-auto" slot="end" size="default">
            Send
          </IonButton>
        </IonItem>
      </IonHeader>
      <IonContent color={'white-background'}>
        {messages.map((m, i) => (
          <IonItem key={i} className="border-solid border-4" lines="none">
            {m.sender === 'The Edge' ? <h2 className="mr-1 text-blue-800">{m.sender}:</h2> : <h2 className="mr-1 text-red-800">{m.sender}:</h2>}
            <p>{m.message}</p>
          </IonItem>
        ))}
      </IonContent>
    </>
  );
};

export default DirectMessageTab;
