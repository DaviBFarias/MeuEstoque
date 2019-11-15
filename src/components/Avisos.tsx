import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar
  } from '@ionic/react';
  import React from 'react';
  import { RouteComponentProps, withRouter } from 'react-router-dom';
  import { AvisosItem } from '../declarations';

  interface AvisosProps extends RouteComponentProps {
    AvisosItens: AvisosItem[];
  }

  const Avisos: React.FunctionComponent<AvisosProps> = ({ AvisosItens }) => (
    <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Avisos</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(Avisos);