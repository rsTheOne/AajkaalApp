import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

function SmallVideoNews(idIs: number, videoIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
      <a href={"/news/"+idIs}>
        <video controls={true} preload="metadata" webkit-playsinline="webkit-playsinline">
            <source src={videoIs} type="video/*" />
        </video>

      <IonCardContent>{renderHTML(titleIs)}</IonCardContent>
      </a>
    </IonCard>
  );
}
export default SmallVideoNews;