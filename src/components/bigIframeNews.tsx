import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonChip, IonAvatar, IonLabel } from '@ionic/react';

function BigIframeNews(idIs: number, cataId: number, cataIs: string, cataIcon: string, videoIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
        <iframe src={videoIs} title={titleIs}></iframe>
      <IonCardHeader>
      <a href={"/catanews/"+cataId}>
      <IonChip>
        <IonAvatar>
          <img alt={cataIs} src={cataIcon} />
        </IonAvatar>
        <IonLabel>{cataIs}</IonLabel>
      </IonChip>
      </a>
      </IonCardHeader>
      <a href={"/news/"+idIs}>
      <IonCardContent>{renderHTML(titleIs)}</IonCardContent>
      </a>
    </IonCard>
  );
}
export default BigIframeNews;