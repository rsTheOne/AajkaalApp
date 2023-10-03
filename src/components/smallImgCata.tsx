import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

function SmallImgCata(idIs: number, imgIs: string, altIs: string, titleIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
      <img title={altIs} src={imgIs} />
      <IonCardContent>{renderHTML(titleIs)}</IonCardContent>
    </IonCard>
  );
}
export default SmallImgCata;