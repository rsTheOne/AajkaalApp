import React from "react";
import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonToolbar, IonTitle } from '@ionic/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import './Catagory.css';


const Privacy: React.FC = () => {
  return (
    <IonPage className="About">
      <IonHeader>
      <IonToolbar>
          <IonTitle>Privacy Policy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed tellus nec mauris auctor dignissim
          fermentum in risus. Sed nec convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id mattis. Fusce
          augue diam, sagittis nec posuere at, consectetur tempor lectus. Nulla at lectus eget mauris iaculis malesuada
          mollis sed neque. Curabitur et risus tristique, malesuada mauris finibus, elementum massa. Proin lacinia
          mauris quis ligula blandit ullamcorper. Donec ut posuere lorem. In volutpat magna vitae tellus posuere
          pulvinar. Nam varius ligula justo, nec placerat lacus pharetra ac. Aenean massa orci, tristique in nisl ut,
          aliquet consectetur libero. Etiam luctus placerat vulputate. Aliquam ipsum massa, porttitor at mollis ut,
          pretium sit amet mi. In neque mauris, placerat et neque vel, tempor interdum dolor. Suspendisse gravida
          malesuada tellus, vel dapibus nisl dignissim vel. Cras ut nulla sit amet erat malesuada euismod vel a nulla.
        </p>
        <p>
          Phasellus sit amet iaculis odio, eget feugiat erat. Etiam sit amet turpis sit amet massa viverra maximus.
          Aenean venenatis porttitor pharetra. Fusce vulputate urna purus, vel efficitur mauris auctor non. Etiam libero
          odio, sodales in velit a, faucibus venenatis erat. Ut convallis sit amet urna in ultrices. Cras neque est,
          vehicula sed lorem ac, placerat commodo elit. Praesent turpis metus, elementum eget iaculis ac, elementum in
          odio. Nunc et elit faucibus, condimentum mauris consequat, ornare dolor. Sed ac lectus a est blandit tempor.
          Etiam lobortis tristique maximus.
        </p>
        <p>
          Phasellus sit amet iaculis odio, eget feugiat erat. Etiam sit amet turpis sit amet massa viverra maximus.
          Aenean venenatis porttitor pharetra. Fusce vulputate urna purus, vel efficitur mauris auctor non. Etiam libero
          odio, sodales in velit a, faucibus venenatis erat. Ut convallis sit amet urna in ultrices. Cras neque est,
          vehicula sed lorem ac, placerat commodo elit. Praesent turpis metus, elementum eget iaculis ac, elementum in
          odio. Nunc et elit faucibus, condimentum mauris consequat, ornare dolor. Sed ac lectus a est blandit tempor.
          Etiam lobortis tristique maximus.
        </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Privacy;
