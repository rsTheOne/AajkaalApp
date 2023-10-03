import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Pujo.css';

const Pujo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Durga Pujo 2023</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">আপনাকে জানাই দূর্গা পূজোর প্রীতি, শুভেচ্ছা এবং আন্তরিক অভিনন্দন। দূর্গা পূজোর সমস্ত খবর সবার প্রথমে পাওয়ার জন্য আজই আমাদের সাথে যুক্তহোন।</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Pujo;
