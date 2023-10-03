import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

function SmallImgNews(idIs: number, imgIs: string, altIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
      <a href={"/news/"+idIs}>
      <img title={altIs} src={imgIs} />
      <IonCardContent>{renderHTML(titleIs)}</IonCardContent>
      </a>
    </IonCard>
  );
}
export default SmallImgNews;