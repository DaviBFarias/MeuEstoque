import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Cadastrar from './pages/Cadastrar';
import Agenda from './pages/Agenda';
import { home, list, addCircle, grid } from 'ionicons/icons';

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

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Produtos',
    url: '/home/produtos',
    icon: list
  },
  {
    title: 'Cadastrar',
    url: '/home/cadastrar',
    icon: addCircle
  },
  {
    title: 'Agenda',
    url: '/home/agenda',
    icon: grid
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/produtos" component={Produtos} exact={true} />
          <Route path="/home/cadastrar" component={Cadastrar} exact={true} />
          <Route path="/home/agenda" component={Agenda} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" exact={true} /> } />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;