import React, { useState, useEffect, createRef, useRef } from "react";
import { IonPage, IonHeader, IonActionSheet, IonAvatar, IonCard, IonCardContent, IonCardHeader, IonChip, IonContent, IonIcon, IonLabel, IonList, IonItem, IonText, IonButton, IonModal, IonToolbar, IonButtons, IonTitle, IonInput, useIonToast } from '@ionic/react';
import { Share } from '@capacitor/share';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import './Catagory.css';
import { caretUpCircle, grid } from "ionicons/icons";
import RelatedNews from "../components/relatedNews";
import "animate.css";
import { OverlayEventDetail } from "@ionic/core";


const News: React.FC = () => {
  const [present] = useIonToast();
  const contentRef = createRef<HTMLIonContentElement>();
  const modal = useRef<HTMLIonModalElement>(null);
  const nameinput = useRef<HTMLIonInputElement>(null);
  const emailinput = useRef<HTMLIonInputElement>(null);
  const orginput = useRef<HTMLIonInputElement>(null);
  const issueinput = useRef<HTMLIonInputElement>(null);
  const [message, setMessage] = useState(
    'Thank you for your report. It will be resolved ASAP.'
  );
  let token = location.href.split('/')[4];
  const renderHTML = (rawHTML: string) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });
  let API: string = `https://aajkaal.live/api/news_info.php?id=${token}`;
  let RELATEDNEWSAPI: string = `https://aajkaal.live/api/related_news.php?id=${token}`;
  const [reportModelIsOpen, setReportModelIsOpen] = useState(false);
  const [newsInfo, setNewsInfo] = useState<[number, string, string, string, string, string, number, string, number, string]>([1, "", "", "", "", "", 1, "", 1, ""]);
  const [relatedNews, setRelatedNews] = useState([[1, "", "", ""]]);
  const fetchApiData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  const presentToast = () => {
    present({
      message: 'Thank you for your report. We will look into it.',
      duration: 3000,
      position: 'bottom',
    });
  };
  const takeACtion = (result: OverlayEventDetail) => {
    if (result.data.action == "report") {
      setReportModelIsOpen(true);
    } if (result.data.action == "share") {
      basicShare();
    }
  }
  function basicShare() {
    Share.share({
      title: `Aajkaal ${newsInfo[3]}`,
      text: newsInfo[1],
      url: `https://aajkaal.live/news.php?id=${newsInfo[0]}title=${newsInfo[1]}`,
    })
  }
  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      console.log(`Hello, ${ev.detail}!`);
    }
    setReportModelIsOpen(false);
  }
  function scrollToTop() {
    contentRef.current?.scrollToTop(500);
  }

  useEffect(() => {
    fetchApiData(API).then((value) => {
      setNewsInfo(value);
    })
  }, []);
  useEffect(() => {
    fetchApiData(RELATEDNEWSAPI).then((value) => {
      setRelatedNews(value);
    })
  }, []);
  return (
    <IonPage className="news">
      <IonHeader>
        <IonText className="news__title--header">{renderHTML(newsInfo[1])}</IonText>
      </IonHeader>
      <IonContent fullscreen ref={contentRef}>
        <IonCard>
          <img alt="Silhouette of mountains" src={newsInfo[7]} />
          <IonCardHeader>
            <a href={"/catanews/" + newsInfo[8]}>
              <IonChip>
                <IonAvatar>
                  <img alt={newsInfo[3]} src={newsInfo[9]} />
                </IonAvatar>
                <IonLabel>{newsInfo[3]}</IonLabel>
              </IonChip>
            </a>
            <IonChip>{newsInfo[2]}</IonChip>
            <IonChip id='open-action-sheet'><IonIcon className="margin__0" icon={grid}></IonIcon></IonChip>
          </IonCardHeader>
          <IonCardContent><IonChip disabled={true}>{newsInfo[5]}</IonChip></IonCardContent>
        </IonCard>
        <IonText className="whole__news">{renderHTML(newsInfo[4])}</IonText>
        <IonActionSheet
          trigger="open-action-sheet"
          header="More Action"
          buttons={[
            {
              text: 'Report',
              role: 'destructive',
              data: {
                action: 'report',
              },
            },
            {
              text: 'Share',
              data: {
                action: 'share',
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ]} onDidDismiss={({ detail }) => takeACtion(detail)}
        ></IonActionSheet>
        <IonList inset={true}>
          {relatedNews.map((relative: any, i) => (
            RelatedNews(relative[0], relative[1], relative[2], relative[3])
          ))}
        </IonList>
        <IonButton className="scroll__to--top" expand="block" onClick={scrollToTop}><IonIcon area-hidden={true} icon={caretUpCircle}></IonIcon></IonButton>

        <IonModal ref={modal} isOpen={reportModelIsOpen} onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => presentToast()}>
                  Submit
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonText>We need some information to resolve the issue.</IonText>
            <br />
            <br />
            <IonItem>
              <IonLabel position="stacked">Enter your name</IonLabel>
              <IonInput label="1." ref={nameinput} type="text" placeholder="Full Name" />
              <IonLabel position="stacked">Enter your email address</IonLabel>
              <IonInput label="2." ref={emailinput} type="email" placeholder="Email" />
              <IonLabel position="stacked">Enter organization details if any</IonLabel>
              <IonInput label="3." ref={orginput} type="text" placeholder="Organization" />
              <IonLabel position="stacked">Explain the issue briefly</IonLabel>
              <IonInput label="4." ref={issueinput} type="text" placeholder="Issue" />
            </IonItem>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default News;
