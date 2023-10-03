import React, { useState, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonSearchbar } from '@ionic/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import './Catagory.css';
import SmallImgCata from "../components/smallImgCata";


const Catagory: React.FC = () => {
  let API: string = "https://aajkaal.live/api/cata_list.php";
  const [cataWOStyle, setCataWOStyle] = useState([[1, "বিভাগ", "বিভাগ", "https://pixabay.com/photos/old-newspaper-newspaper-retro-sepia-350376/"]]);
  const fetchApiData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiData(API).then((value) => {
      setCataWOStyle(value);
    })
  }, [])
  return (
    <IonPage className="catagory">
      <IonHeader>
      আপনার পছন্দের বিভাগ বেছেনিন
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {cataWOStyle.map((cata: any, i) => (
                <IonCol size="4" key={i}><a href={"/catanews/"+cata[0]}>{SmallImgCata(cata[0], cata[3], cata[2], cata[1])}</a></IonCol>
              ))}
          </IonRow>
        </IonGrid>
        <IonSearchbar animated={true} placeholder="খুঁজেনিন আপনার পছন্দের খবর"></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Catagory;
