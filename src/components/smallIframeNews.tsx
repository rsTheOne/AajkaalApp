import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

function SmallIframeNews(idIs: number, videoIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
        <iframe src={videoIs} title={titleIs}></iframe>
      <IonCardContent><a href={"/news/"+idIs}>{renderHTML(titleIs)}</a></IonCardContent>
    </IonCard>
  );
}
export default SmallIframeNews;