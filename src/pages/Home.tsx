import React, { useState, useEffect, createRef } from "react";
import { IonContent, IonHeader, IonPage, IonButton, IonGrid, IonRow, IonCol, IonIcon, RefresherEventDetail, IonLabel, IonItem, IonToolbar, IonSegment, IonSegmentButton, IonToast, IonRefresher, IonRefresherContent, IonProgressBar, useIonToast } from '@ionic/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import BasicCard from '../components/basicCard';
import { calendar, cloudyNight, newspaperOutline, caretUpCircle, caretForwardCircleOutline, caretDown } from 'ionicons/icons';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import './Home.css';
import SmallIframeNews from "../components/smallIframeNews";
import SmallVideoNews from "../components/smallVideoNews";
import BigVideoNews from "../components/bigVideoNews";
import BigIframeNews from "../components/bigIframeNews";
import SmallImgNews from "../components/smallImgNews";
import BigImgNews from "../components/bigImgNews";
import CataWiseNews from "../components/cataWiseNews";


const Home: React.FC = () => {
  const [present] = useIonToast();
  const [progress, setProgress] = useState(0);
  const contentRef = createRef<HTMLIonContentElement>();
  const timer = "https://aajkaal.live/assets/icon/timer-outline.svg";
  let HEADAPI: string = "https://aajkaal.live/api/headlines.php";
  let DATEAPI: string = "https://aajkaal.live/api/bengali_date.php";
  let LIVEAPI: string = "https://aajkaal.live/api/live.php";
  let BREAKINGAPI: string = "https://aajkaal.live/api/breaking_news.php";
  let NEWSWCATAAPI: string = "https://aajkaal.live/api/landing_news_with_cata.php";
  let NEWSWOCATAAPI: string = "https://aajkaal.live/api/landing_news_wo_cata.php";
  const [headlineWithStyle, setHeadlineWithStyle] = useState([["বিশেষ বিশেষ খবর একনজরে"]]);
  const [bengDate, setBengDate] = useState("আজকের দিনটি বিশেষ");
  const [live, setLive] = useState([[1, "", "embed", ""]]);
  const [breaking, setBreaking] = useState([[1, "", 1, "", "", "", 1]]);
  const [newsWCata, setNewsWCata] = useState([[[1, "", 1, "", 1, "", ""]]]);
  const [newsWOCata, setNewsWOCata] = useState([[1, "", 1, ""]]);
  const fetchApiData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }
  const presentToast = () => {
    present({
      message: 'আমাদের সাথে থাকুন পূজোর সেরা খবর সবার প্রথমে পাওয়ার জন্য',
      duration: 3000,
      position: 'bottom',
    });
  };
  function scrollToTop() {
    contentRef.current?.scrollToTop(500);
  } function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      setProgress(0);
      event.detail.complete();
    }, 2000);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 0.01);
    }, 50);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetchApiData(HEADAPI).then((value) => {
      setHeadlineWithStyle(value);
    })
  }, []);
  useEffect(() => {
    fetchApiData(DATEAPI).then((value) => {
      setBengDate(value);
    })
  }, []);
  useEffect(() => {
    fetchApiData(LIVEAPI).then((value) => {
      setLive(value);
    })
  }, []);
  useEffect(() => {
    fetchApiData(BREAKINGAPI).then((value) => {
      setBreaking(value);
    })
  }, []);
  useEffect(() => {
    fetchApiData(NEWSWCATAAPI).then((value) => {
      setNewsWCata(value);
    })
  }, []);
  useEffect(() => {
    fetchApiData(NEWSWOCATAAPI).then((value) => {
      setNewsWOCata(value);
    })
  }, []);
  return (
    <IonPage>
      <IonHeader>


      <IonToolbar>
        <IonSegment value="all">
          <IonSegmentButton value="all">
            <IonLabel>সমস্ত খবর</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="favorites">
            <IonLabel onClick={() => presentToast()}>পূজো স্পেশাল
            </IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonProgressBar value={progress}></IonProgressBar>
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={contentRef}>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={caretDown}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>
      <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon aria-hidden="true" icon={calendar} />
                  </IonCol>
                  <IonCol size="10" className="font__size--12">
                  {bengDate}
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol><IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon aria-hidden="true" icon={cloudyNight} />
                  </IonCol>
                  <IonCol size="10" className="font__size--12">
                  কলকাতায় মেঘলা আকাশ
                  </IonCol>
                </IonRow>
              </IonGrid></IonCol>
          </IonRow>
        </IonGrid>
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
          {headlineWithStyle.map((headline: any, i) => (
              <SwiperSlide key={i}>{BasicCard(headline[0])}</SwiperSlide>
            ))}
        </Swiper>
        <IonItem><IonIcon aria-hidden="true" icon={newspaperOutline} slot="start"></IonIcon>
          <IonLabel>আজকের সেরা খবর</IonLabel></IonItem>
        <IonGrid>
          <IonRow>
        {live.map((liveNews: any, i) => (
           i%3 == 0 ? 
          <IonCol size="12" key={i}>
            {liveNews[2] != "embed" ?
              BigVideoNews(liveNews[0], 0, "LIVE", timer, liveNews[3], liveNews[1]) :
              BigIframeNews(liveNews[0], 0, "LIVE", timer, liveNews[3], liveNews[1])
            }</IonCol> : <IonCol size="6" key={i}>
              {liveNews[2] != "embed" ?
              SmallVideoNews(liveNews[0], liveNews[3], liveNews[1]) :
              SmallIframeNews(liveNews[0], liveNews[3], liveNews[1])
            }
            </IonCol>
        ))}
        {breaking.map((breakingNews: any, j) => (
        j%5 == 0 ? 
        <IonCol size="12" key={j}>
          {breakingNews[2] == 1 ?
            BigImgNews(breakingNews[0], breakingNews[6], breakingNews[4], breakingNews[5], breakingNews[3], breakingNews[1], breakingNews[1]) :
            breakingNews[2] == 2 ?
            BigVideoNews(breakingNews[0], breakingNews[6], breakingNews[4], breakingNews[5], breakingNews[3], breakingNews[1]) :
            BigIframeNews(breakingNews[0], breakingNews[6], breakingNews[4], breakingNews[5], breakingNews[3], breakingNews[1])
          }</IonCol> : <IonCol size="6" key={j}>
            {breakingNews[2] == 1 ?
            SmallImgNews(breakingNews[0], breakingNews[3], breakingNews[1], breakingNews[1]) :
            breakingNews[2] == 2 ?
            SmallVideoNews(breakingNews[0], breakingNews[3], breakingNews[1]) :
            SmallIframeNews(breakingNews[0], breakingNews[3], breakingNews[1])
          }
          </IonCol>
      ))}
      </IonRow>
        </IonGrid>

      {newsWCata.map((specialNews: any, l) => (
        specialNews.map((singleNews: any, p: number) => (
          p == 0 ?
          <IonItem key={p}>
            <img title={singleNews[1]} src={singleNews[3]} className="cata__icon--margin" height={24}/>
          <IonLabel>বিশেষ খবর {singleNews[1]}</IonLabel>
          {/* <IonBadge color="success"><IonIcon icon="caretForwardCircleOutline"></IonIcon></IonBadge> */}
          </IonItem>
          : CataWiseNews(singleNews)
        ))
      ))}

        <IonItem><IonIcon aria-hidden="true" icon={newspaperOutline} slot="start"></IonIcon>
          <IonLabel>আরও খবর</IonLabel></IonItem>
        <IonGrid>
          <IonRow>
      {newsWOCata.map((otherNews: any, k) => (
        <IonCol size="6" key={k}>
          {otherNews[2] == 1 ?
            SmallImgNews(otherNews[0], otherNews[3], otherNews[1], otherNews[1]) :
            otherNews[2] == 2 ?
            SmallVideoNews(otherNews[0], otherNews[3], otherNews[1]) :
            SmallIframeNews(otherNews[0], otherNews[3], otherNews[1])
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

export default Home;
