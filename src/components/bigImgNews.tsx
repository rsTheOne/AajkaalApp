import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonChip, IonAvatar, IonLabel, IonIcon, IonCardSubtitle } from '@ionic/react';
import './bigNews.css';

function BigImgNews(idIs: number, cataId: number, cataIs: string, cataIcon: string, imgIs: string, altIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard className='big__news--card'>
      <a href={"/news/"+idIs}>
      <img alt={altIs} src={imgIs} />
      </a>
      <IonCardHeader>
      <a href={"/catanews/"+cataId}>
      <IonChip>
        <IonAvatar>
          <img alt={cataIs} src={cataIcon} height={12} />
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
export default BigImgNews;