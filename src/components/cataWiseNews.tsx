import React from 'react';
import { IonGrid, IonRow, IonLabel, IonCol } from '@ionic/react';
import BigImgNews from './bigImgNews';
import BigVideoNews from './bigVideoNews';
import BigIframeNews from './bigIframeNews';
import SmallImgNews from './smallImgNews';
import SmallVideoNews from './smallVideoNews';
import SmallIframeNews from './smallIframeNews';

function CataWiseNews(contentIs: [[number, string, number, string, number, string, string]]) {
    return (
        <IonGrid>
            <IonRow>
                {contentIs.map((news: any, i: number) => (
                    i == 0 ? 
                    <IonCol size='12' key={i}>
            {news[2] == 1 ?
            BigImgNews(news[0], news[4], news[5], news[6], news[3], news[1], news[1]) :
            news[2] == 2 ?
            BigVideoNews(news[0], news[4], news[5], news[6], news[3], news[1]) :
            BigIframeNews(news[0], news[4], news[5], news[6], news[3], news[1])
          }
                    </IonCol> :
                    <IonCol size='6' key={i}>
            {news[2] == 1 ?
            SmallImgNews(news[0], news[3], news[1], news[1]) :
            news[2] == 2 ?
            SmallVideoNews(news[0], news[3], news[1]) :
            SmallIframeNews(news[0], news[3], news[1])
          }
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}
export default CataWiseNews;