import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonChip, IonAvatar, IonLabel } from '@ionic/react';

function BigVideoNews(idIs: number, cataId: number, cataIs: string, cataIcon: string, videoIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
        <video controls={true} preload="metadata" webkit-playsinline="webkit-playsinline">
            <source src={videoIs} type="video/*" />
        </video>
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
export default BigVideoNews;