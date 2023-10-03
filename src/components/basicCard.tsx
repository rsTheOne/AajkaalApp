import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

function BasicCard(contentIs: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
    <IonCard>
      <IonCardContent>{renderHTML(contentIs)}</IonCardContent>
    </IonCard>
  );
}
export default BasicCard;