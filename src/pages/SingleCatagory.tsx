import React, { useState, useEffect, createRef } from "react";
import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonTitle } from '@ionic/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import BasicCard from '../components/basicCard';
import { caretUpCircle } from 'ionicons/icons';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import './Home.css';
import BigImgNews from "../components/bigImgNews";
import BigVideoNews from "../components/bigVideoNews";
import BigIframeNews from "../components/bigIframeNews";
import SmallImgNews from "../components/smallImgNews";
import SmallVideoNews from "../components/smallVideoNews";
import SmallIframeNews from "../components/smallIframeNews";


const SingleCatagory: React.FC = () => {
  let token = location.href.split('/')[4];
  let CATAINFO: string = `https://aajkaal.live/api/cata_info.php?id=${token}`;
  let CATANEWS: string = `https://aajkaal.live/api/cata_news.php?id=${token}`;
  let CATANEWSPAST: string = `https://aajkaal.live/api/cata_news.php?from=past&id=${token}`;
  let CATAHEADLINE: string = `https://aajkaal.live/api/headlines.php?id=${token}`;
  const [cataInfoWOStyle, setCataInfoWOStyle] = useState<[number, string, string, string, string]>([1, "বিশেষ খবর", "", "বিশেষ বিশেষ খবর একনজরে", ""]);
  const [cataNewsWOStyle, setCataNewsWOStyle] = useState([1, "", "", "", ""]);
  const [cataNewsWOStylePast, setCataNewsWOStylePast] = useState([1, "", "", "", ""]);
  const [cataLineWOStyle, setCataLineWOStyle] = useState([["বিশেষ বিশেষ খবর একনজরে"]]);
  const fetchApi = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }
  const contentRef = createRef<HTMLIonContentElement>();

  useEffect(() => {
    fetchApi(CATAINFO).then((value) => {
      setCataInfoWOStyle(value);
    })
  }, []);
  useEffect(() => {
    fetchApi(CATANEWS).then((value) => {
      setCataNewsWOStyle(value);
    })
  }, []);
  useEffect(() => {
    fetchApi(CATANEWSPAST).then((value) => {
      setCataNewsWOStylePast(value);
    })
  }, []);
  useEffect(() => {
    fetchApi(CATAHEADLINE).then((value) => {
      setCataLineWOStyle(value);
    })
  }, []);
  function scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    contentRef.current?.scrollToTop(500);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol size="3">
                    <img src={cataInfoWOStyle[4]} title={cataInfoWOStyle[1]} height={18} />
                  </IonCol>
                  <IonCol size="9">
                  খবর {cataInfoWOStyle[1]}
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol><IonGrid>
                <IonRow className="cata__line--height">
                  {cataInfoWOStyle[2]}
                </IonRow>
              </IonGrid></IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent fullscreen>
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
          {cataLineWOStyle.map((headline: any, i) => (
              <SwiperSlide key={i}>{BasicCard(headline[0])}</SwiperSlide>
            ))}
      </Swiper>
      <IonGrid>
        <IonRow>
      {cataNewsWOStyle.map((news: any, j) => (
        j%5 == 0 ? 
        <IonCol size="12" key={j}>
          {news[2] == 1 ?
            BigImgNews(news[0], cataInfoWOStyle[0], cataInfoWOStyle[1], cataInfoWOStyle[4], news[3], news[1], news[1]) :
            news[2] == 2 ?
            BigVideoNews(news[0], cataInfoWOStyle[0], cataInfoWOStyle[1], cataInfoWOStyle[4], news[3], news[1]) :
            BigIframeNews(news[0], cataInfoWOStyle[0], cataInfoWOStyle[1], cataInfoWOStyle[4], news[3], news[1])
          }</IonCol> : <IonCol size="6" key={j}>
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
      <IonTitle>আরও কিছু আকর্ষণীয় খবর</IonTitle>
      <IonGrid>
        <IonRow>
      {cataNewsWOStylePast.map((pastnews: any, j) => (
        <IonCol size="6" key={j}>
            {pastnews[2] == 1 ?
            SmallImgNews(pastnews[0], pastnews[3], pastnews[1], pastnews[1]) :
            pastnews[2] == 2 ?
            SmallVideoNews(pastnews[0], pastnews[3], pastnews[1]) :
            SmallIframeNews(pastnews[0], pastnews[3], pastnews[1])
          }
          </IonCol>
      ))}
        </IonRow>
      </IonGrid>
      <IonButton className="scroll__to--top" expand="block" onClick={scrollToTop}><IonIcon area-hidden={true} icon={caretUpCircle}></IonIcon></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SingleCatagory;
