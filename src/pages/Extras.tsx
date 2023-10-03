import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonToggle, IonNote, IonText } from '@ionic/react';
import { call, informationCircle, lockClosed, logoFacebook, logoInstagram, logoTwitter, logoYoutube, mailOpen, personCircle } from 'ionicons/icons';
import './Extras.css';

const Extras: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Extras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset={true}>
        <a href='/about'>
          <IonItem button={true}>
            <IonIcon aria-hidden="true" icon={informationCircle} slot="start"></IonIcon>
            <IonLabel>About Us</IonLabel>
          </IonItem>
        </a>
        <a href='tel:910000000000'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
          <IonLabel>Call</IonLabel>
          <IonNote slot="end">+91 000 000 0000</IonNote>
        </IonItem>
        </a>
        <a href='mailto:info@aajkaal.in'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={mailOpen} slot="start"></IonIcon>
          <IonLabel>Email</IonLabel>
          <IonNote slot="end">info@aajkaal.in</IonNote>
        </IonItem>
        </a>
        <a href='https://fb.me/Aajkaal/'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={logoFacebook} slot="start"></IonIcon>
          <IonLabel>Facebook</IonLabel>
          <IonNote slot="end">@aajkaal</IonNote>
        </IonItem>
        </a>
        <a href='https://instagram.com/aajkaal.in/'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={logoInstagram} slot="start"></IonIcon>
          <IonLabel>Instagram</IonLabel>
          <IonNote slot="end">@aajkaal.in</IonNote>
        </IonItem>
        </a>
        <a href='https://www.youtube.com/@aajkaalinofficial'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={logoYoutube} slot="start"></IonIcon>
          <IonLabel>YouTube</IonLabel>
          <IonNote slot="end">@aajkaalinofficial</IonNote>
        </IonItem>
        </a>
        <a href='https://twitter.com/aajkaalofficial'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={logoTwitter} slot="start"></IonIcon>
          <IonLabel>Twitter</IonLabel>
          <IonNote slot="end">@aajkaalofficial</IonNote>
        </IonItem>
        </a>
        <a href='/useragreement'>
        <IonItem button={true}>
          <IonIcon aria-hidden="true" icon={personCircle} slot="start"></IonIcon>
          <IonLabel>User Agreement</IonLabel>
        </IonItem>
        </a>
        <a href="/privacy">
        <IonItem button={true}>
            <IonIcon aria-hidden="true" icon={lockClosed} slot="start"></IonIcon>
            <IonLabel>Privacy Policy</IonLabel>
        </IonItem>
        </a>
        <IonItem>
            <IonToggle>
              <IonLabel>Allow Notifications</IonLabel>
              <IonNote color="medium">Unsubscribe at any time</IonNote>
            </IonToggle>
          </IonItem>
      </IonList>
      <br />
      <br />
      <br />
      <br />
      <IonText>Made with ❤️ by Aajkaal Publishers Pvt. Ltd.</IonText>
      <IonText>App Version 1.0.1</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Extras;
