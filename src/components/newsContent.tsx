import React from 'react';
import { IonActionSheet, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonIcon, IonLabel } from '@ionic/react';
import { shareOutline } from 'ionicons/icons';
import '../pages/Home.css';

function NewsContent(contentIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonContent className='ion-padding'>
      <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
      <IonChip>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>Avatar Chip</IonLabel>
      </IonChip>
      <IonChip>Default</IonChip>
      <IonChip disabled={true}>Disabled</IonChip>
      </IonCardHeader>
      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
      <h1>{renderHTML(contentIs)}</h1>
      <IonButton slot='fixed' id='open-action-sheet'><IonIcon icon={shareOutline}></IonIcon></IonButton>
      <p>{renderHTML(contentIs)}</p>
      <IonActionSheet
        trigger="open-action-sheet"
        header="More Action"
        buttons={[
          {
            text: 'Report',
            role: 'destructive',
            data: {
              action: 'report',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonContent>
    
  );
}
export default NewsContent;