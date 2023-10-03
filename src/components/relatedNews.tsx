import React from 'react';
import { IonLabel, IonIcon, IonItem, IonNote } from '@ionic/react';
import './bigNews.css';
import { chevronForward } from 'ionicons/icons';


function RelatedNews(idIs: number, cataIs: string, titleIs: string, reporterIS: string) {
  const renderHTML = (rawHTML: string) => React.createElement("p", {dangerouslySetInnerHTML: {__html: rawHTML}});
  return (
  <a href={"/news/"+idIs}>
        <IonItem button={true} detail={false} className='relative__news--ionitem'>
            <div className="unread-indicator-wrapper" slot="start">
              <div className="unread-indicator"></div>
            </div>
            <IonLabel>
              <strong>{cataIs}</strong>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                {renderHTML(titleIs)}
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium">{reporterIS}</IonNote>
              <IonIcon color="medium" icon={chevronForward}></IonIcon>
            </div>
          </IonItem>
          </a>
          );
        }
        export default RelatedNews;