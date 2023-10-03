import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, search, cog } from 'ionicons/icons';
import Home from './pages/Home';
import Catagory from './pages/Catagory';
import Extras from './pages/Extras';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SingleCatagory from './pages/SingleCatagory';
import News from './pages/News';
import About from './pages/About';
import Privacy from './pages/Privacy';
import UserAgreement from './pages/UserAgreement';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/catagory">
            <Catagory />
          </Route>
          <Route path="/extras">
            <Extras />
          </Route>
          <Route path="/catanews">
            <SingleCatagory />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/useragreement">
            <UserAgreement />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="catagory" href="/catagory">
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Catagory</IonLabel>
          </IonTabButton>
          <IonTabButton tab="extras" href="/extras">
            <IonIcon aria-hidden="true" icon={cog} />
            <IonLabel>Extras</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
